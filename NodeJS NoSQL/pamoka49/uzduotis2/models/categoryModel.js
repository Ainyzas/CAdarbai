import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 70,
    required: true,
  },
  description: {
    type: String,
    minLength: 3,
    maxLength: 400,
    required: true,
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }],
});

const categoryModel = mongoose.model('categories', categorySchema);

export default categoryModel;
