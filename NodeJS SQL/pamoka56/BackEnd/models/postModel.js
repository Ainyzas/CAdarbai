import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  userId: {
    type: Number,
    min: 0,
    required: true,
  },
  title: {
    type: String,
    minLength: 5,
    maxLength: 150,
    required: true,
  },
  body: {
    type: String,
    minLength: 5,
    maxLength: 800,
    required: true,
  },
});

const postModel = mongoose.model('posts', postSchema);

export default postModel;
