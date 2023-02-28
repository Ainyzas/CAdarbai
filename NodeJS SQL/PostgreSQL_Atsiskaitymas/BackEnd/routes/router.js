import express from 'express';
import { createNewCar, deleteCar, getAllCars, getCarById, routeNotFound } from '../controllers/controller.js';
import { middlewareTest, checkForId } from '../middleware/middleware.js';

const router = express.Router();

router.get('/cars', getAllCars);

router.get('/cars/:id', checkForId, getCarById);

router.post('/cars', middlewareTest, createNewCar);

router.delete('/cars/:id', checkForId, deleteCar);

router.all('*', routeNotFound);

export default router;
