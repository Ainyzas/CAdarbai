import express from 'express';
import { handleRouteNotFound } from '../middleware/middleware.js';

const router = express.Router();

router.all('*', handleRouteNotFound);

export default router;
