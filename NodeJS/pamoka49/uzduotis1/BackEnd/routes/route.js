import express from 'express';
import { createNewPet, getAllPets } from '../controllers/controller.js';
const router = express.Router();

router.post('/pets', createNewPet);
router.get('/pets', getAllPets);

export default router;
