import express from 'express';
import { getAllPosts, getAllPostTitles, getAllPostBody, getPostById, createNewPost } from '../controllers/controller.js';

const router = express.Router();

router.get('/posts', getAllPosts);

router.get('/posts/title', getAllPostTitles);

router.get('/posts/body', getAllPostBody);

router.get('/posts/:id', getPostById);

router.post('/posts', createNewPost);

export default router;
