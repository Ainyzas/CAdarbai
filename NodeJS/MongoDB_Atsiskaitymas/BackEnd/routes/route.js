import express from 'express';
import { createNewMembership, addNewUser } from '../controllers/controller.js';

const router = express.Router();

router.post('/memberships', createNewMembership);

router.post('/users/:membershipId', addNewUser);

export default router;
