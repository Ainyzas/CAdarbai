import User from '../../db/user.js';

export async function getAllUsers(req, res) {
  const users = await User.find();
  res.json(users);
}

export async function getUserById(req, res) {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
}

export async function getUserByName(req, res) {
  const { name } = req.params;
  const users = await User.find({ name });
  res.json(users);
}
