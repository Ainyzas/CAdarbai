import Category from '../models/categoryModel.js';
import Product from '../models/productModel.js';
import mongoose from 'mongoose';

export async function createNewCategory(req, res) {
  try {
    const { name, description } = req.body;

    const category = {
      name,
      description,
    };

    const categoryRes = await Category.create(category);

    res.json(categoryRes);
  } catch (e) {
    res.status(500).json({ e });
  }
}

export async function addNewProduct(req, res) {
  try {
    const { categoryId } = req.params;
    const { name, price } = req.body;

    const product = await Product.create({
      name,
      price,
      categoryId: mongoose.Types.ObjectId(categoryId),
    });

    const category = await Category.findById(categoryId);
    category.products.push(mongoose.Types.ObjectId(product._id));
    category.save();

    res.json(product);
  } catch (e) {
    res.status(500).json({ e });
  }
}

export async function getAllCategories(req, res) {
  try {
    const { id } = req.params;
    const categories = await Category.find().populate('products');

    res.json(categories);
  } catch (e) {
    res.status(500).json({ e });
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (e) {
    res.status(500).json({ e });
  }
}

export async function getCategoryValue(req, res) {
  try {
    const response = {};
    for await (const category of Category.find()) {
      const oneCategory = await category.populate('products', 'price');
      const value = oneCategory.products.reduce((total, product) => total + product.price, 0);
      response[oneCategory.name] = value;
    }
    res.json(response);
  } catch (e) {
    res.status(500).json({ e });
  }
}
