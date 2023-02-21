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
    const { name, surname, email, membershipSelect } = req.body;

    const membershipId = await Membership.findOne({ name: membershipSelect });

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

export async function getAllMemberships(req, res) {
  try {
    const memberships = await Membership.find().populate('users');

    res.json(memberships);
  } catch (e) {
    res.status(500).json({ e });
  }
}

export async function getAllUsers(req, res) {
  try {
    const { order } = req.query;
    const users = await User.find().populate('membershipId', 'name').sort({ name: order });

    res.json(users);
  } catch (e) {
    res.status(500).json({ e });
  }
}

export async function deleteMembership(req, res) {
  try {
    const { id } = req.query;

    const membership = await Membership.findByIdAndDelete(id);

    res.json(membership);
  } catch (e) {
    res.status(500).json({ e });
  }
}
