import express from 'express';
import {
  createNewCategory,
  addNewProduct,
  getAllCategories,
  getAllProducts,
  getCategoryValue,
} from '../controllers/controller.js';

const router = express.Router();

router.post('/category', createNewCategory);

router.post('/product/:categoryId', addNewProduct);

router.get('/category', getAllCategories);

router.get('/product', getAllProducts);

router.get('/categoryvalue', getCategoryValue);

export default router;
