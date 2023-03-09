import express from 'express';

const router = express.Router();

router.get('/pets');

router.post('/pets');

router.delete('/pets/:id');

export default router;
