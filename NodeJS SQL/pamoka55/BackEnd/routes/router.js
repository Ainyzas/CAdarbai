import express from 'express';
import { getCustomers, postCustomer } from '../controllers/customer.js';
import { getOrdersByCustomers, postOrder } from '../controllers/order.js';

const router = express.Router();

router.get('/customer', getCustomers);

router.get('/customer/:id/order', getOrdersByCustomers);

router.post('/customer', postCustomer);

router.post('/customer/:id/order', postOrder);

export default router;
