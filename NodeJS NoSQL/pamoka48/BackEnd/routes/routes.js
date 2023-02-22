import express from 'express';
import { getAllUsers, getUserById, getUserByName } from './GET/route.js';
import { postUser } from './POST/route.js';
import { updateUserById } from './PUT/route.js';
import { deleteUserById } from './DELETE/route.js';

const router = express.Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.get('/users/name/:name', getUserByName);

router.post('/users', postUser);

router.put('/users/:id', updateUserById);

router.delete('/users/:id', deleteUserById);

export default router;
