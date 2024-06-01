import { Router } from "express";
import { extPosts, sumarPost, eliminarPost} from '../src/controllers/postsControllers.js';

const router = Router();

router.get('/posts', extPosts);

router.post('/posts', sumarPost);

router.delete('/posts/:id', eliminarPost);

export default router;