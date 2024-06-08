import { Router } from "express";
import { extPosts, sumarPost, eliminarPost, megustaPost} from '../src/controllers/postsControllers.js';

const router = Router();

router.get('/posts', extPosts);

router.post('/posts', sumarPost);

router.delete('/posts/:id', eliminarPost);

router.put('/posts/like/:id', megustaPost);

router.all('*', (req,res) => {
    res.status(404).json({error: 'Rut no Existe'})
});

export default router;