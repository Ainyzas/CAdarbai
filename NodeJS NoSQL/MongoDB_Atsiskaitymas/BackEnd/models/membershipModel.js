import mongoose from 'mongoose';

const membershipSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 70,
    required: true,
  },
  price: {
    type: Number,
    min: 1,
    required: true,
  },
  description: {
    type: String,
    minLength: 3,
    maxLength: 400,
    required: true,
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
});

const membershipModel = mongoose.model('memberships', membershipSchema);

export default membershipModel;
