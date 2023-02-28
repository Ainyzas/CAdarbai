import express from 'express';
import { getAllCars } from '../controllers/controller.js';
// import {} from '../middleware/middleware.js';

const router = express.Router();

router.get('/cars', getAllCars);

export default router;
