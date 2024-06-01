import { Router } from "express";
import { extPosts, sumarPost } from '../src/controllers/postsControllers.js';

const router = Router();

router.get('/posts', extPosts);

router.post('/posts', sumarPost);

export default router;