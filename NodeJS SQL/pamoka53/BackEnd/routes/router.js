import express from 'express';
import {
  getProductsPaginated,
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
  routeNotFound,
} from '../controllers/controller.js';
const router = express.Router();

router.get('/products/paginate', getProductsPaginated);

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', createNewProduct);

router.put('/products/:id', updateProductById);

router.delete('/products/:id', deleteProductById);

router.all('*', routeNotFound);

export default router;
