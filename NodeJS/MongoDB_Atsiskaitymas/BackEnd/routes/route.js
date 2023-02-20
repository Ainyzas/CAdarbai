import express from 'express';
import { createNewMembership, addNewUser } from '../controllers/controller.js';

const router = express.Router();

router.post('/memberships', createNewMembership);

router.post('/users', addNewUser);

export default router;
