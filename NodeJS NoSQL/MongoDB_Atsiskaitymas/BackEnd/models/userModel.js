import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 150,
    required: true,
  },
  surname: {
    type: String,
    minLength: 3,
    maxLength: 150,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  membershipId: { type: mongoose.Schema.Types.ObjectId, ref: 'memberships' },
});

const userModel = mongoose.model('users', userSchema);

export default userModel;
