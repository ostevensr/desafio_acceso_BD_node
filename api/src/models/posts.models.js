import pool from '../../db/config.js'

//Pedir todos los posts

export const extPostsModel = async () => {
    const posts = await pool.query('SELECT * FROM posts')
    console.log(posts)
    return posts.rows
};

//Agregar posts

export const agregarPost = async ({titulo,img,descricpcion}) => {
    const result = await pool.query(
        'INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1, $2, $3, $4) RETURNING *',
        [titulo,img,descricpcion,0]);
    console.log(result.rows)
    return result.rows[0]
};

//Eliminar posts

export const sacarPost = async (id) => {
    const result = await pool.query(
        'DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    console.log(result.rows[0]);
    return result.rows[0];
};

