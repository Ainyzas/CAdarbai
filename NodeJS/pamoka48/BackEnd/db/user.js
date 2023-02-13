import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 40,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 4,
    maxLength: 40,
    required: true,
  },
  age: {
    type: Number,
    minLength: 1,
    maxLength: 120,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;
