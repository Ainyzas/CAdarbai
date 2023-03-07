import express from 'express';
import { getAllProducts, getProductById, getOrderById, postNewProduct, postNewOrder } from '../controllers/controller.js';

const router = express.Router();

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.get('/products/orders/:id', getOrderById);

router.post('/products', postNewProduct);

router.post('/products/orders/:id', postNewOrder);

export default router;
