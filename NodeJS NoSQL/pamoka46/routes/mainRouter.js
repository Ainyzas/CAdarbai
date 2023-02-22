import express from 'express';
import userData from './userData/route.js';
import userCars from './userCars/route.js';
import userCarBrand from './userCarBrand/route.js';
import userId from './userId/route.js';
import userEmails from './userEmails/route.js';
import userGender from './userGender/route.js';
const router = express.Router();

router.use('/users', userData, userCars, userCarBrand, userId, userEmails, userGender);

export default router;
