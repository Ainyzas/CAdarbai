import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 150,
    required: true,
  },
  price: {
    type: Number,
    min: 1,
    required: true,
  },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
});

const productModel = mongoose.model('products', productSchema);

export default productModel;
