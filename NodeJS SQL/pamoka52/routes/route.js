import express from 'express';
import {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
} from '../controllers/controller.js';
const router = express.Router();

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', createNewProduct);

router.put('/products/:id', updateProductById);

router.delete('/products/:id', deleteProductById);

export default router;