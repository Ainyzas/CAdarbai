import mongoose from 'mongoose';

const petSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    max: 50,
  },
  type: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
});

const petModel = mongoose.model('pets', petSchema);

export default petModel;
