import express from 'express';
import { handleRouteNotFound } from '../middleware/middleware.js';
import petRouter from './pets.js';
import logRouter from './log.js';
import medRouter from './medications.js';
import prescRouter from './prescriptions.js';

const router = express.Router();

router.use('/v1', petRouter, logRouter, medRouter, prescRouter);

router.all('*', handleRouteNotFound);

export default router;
