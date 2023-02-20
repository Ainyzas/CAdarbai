import mongoose from 'mongoose';
import User from '../models/userModel.js';
import Membership from '../models/membershipModel.js';

export async function createNewMembership(req, res) {
  try {
    const { name, price, description } = req.body;

    const membership = {
      name,
      price,
      description,
    };

    const membershipRes = await Membership.create(membership);

    res.json(membershipRes);
  } catch (e) {
    res.status(500).json({ e });
  }
}

export async function addNewUser(req, res) {
  try {
    const { membershipId } = req.params;
    const { name, surname, email } = req.body;

    const user = await User.create({
      name,
      surname,
      email,
      membershipId: mongoose.Types.ObjectId(membershipId),
    });

    const membership = await Membership.findById(membershipId);
    membership.users.push(mongoose.Types.ObjectId(user._id));
    membership.save();

    res.json(user);
  } catch (e) {
    res.status(500).json({ e });
  }
}
