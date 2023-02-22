import express from 'express';
import {
  createNewMembership,
  addNewUser,
  getAllMemberships,
  getAllUsers,
  deleteMembership,
} from '../controllers/controller.js';

const router = express.Router();

router.post('/memberships', createNewMembership);

router.post('/users', addNewUser);

router.get('/memberships', getAllMemberships);

router.get('/users', getAllUsers);

router.delete('/memberships', deleteMembership);

export default router;
