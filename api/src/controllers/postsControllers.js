import {extPostsModel, agregarPost, sacarPost} from '../models/posts.models.js'


export const extPosts = async(req,res) => {
    try {
        const posts = await extPostsModel();
        res.status(200).json({posts: posts});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

export const sumarPost = async (req,res) =>{
    try {
        const {titulo, img, descripcion} = req.body;
        const nuevoPost = await agregarPost({titulo, img, descripcion});
        res.status(201).json({post: nuevoPost});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

export const eliminarPost = async (req,res) =>{
    try {
        const { id } = req.params;
        const postEliminado = await sacarPost(id);
        res.status(200).json({ post: postEliminado });
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};