import pool from '../../db/config.js'

//Pedir todos los posts

export const extPostsModel = async () => {
    try {
        const posts = await pool.query('SELECT * FROM posts')
    console.log(posts)
    return posts.rows
        
    } catch (error) {
        console.error('Error obteniendo total de posts:', error);
    }
};

//Agregar posts

export const agregarPost = async ({titulo,img,descricpcion}) => {
    try {
        const result = await pool.query(
            'INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1, $2, $3, $4) RETURNING *',
            [titulo,img,descricpcion,0]);
        console.log(result.rows)
        return result.rows[0]
        
    } catch (error) {
        console.error('Error agregando post:', error);
    }
};

//Eliminar posts

export const sacarPost = async (id) => {
    try {
        const result = await pool.query(
            'DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
        console.log(result.rows[0]);
        return result.rows[0];
        
    } catch (error) {
        console.error('Error eliminando post:', error);
    }
};

//Editar Post - Me Gusta

export const meGusta = async (id) => {
    try {
        const likesTabla = await pool.query(
            'SELECT likes FROM posts WHERE id = $1', [id]);
        
        const likesActuales = likesTabla.rows[0].likes;
    
        const result = await pool.query(
            'UPDATE posts SET likes=$1 WHERE id = $2 RETURNING *', 
            [likesActuales +1,id]);
        console.log(result.rows[0]);
        return result.rows[0];
    } catch (error) {
        console.error('Error agregando likes:', error);
    }
};