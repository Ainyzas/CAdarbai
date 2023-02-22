import User from '../../db/user.js';

export async function updateUserById(req, res) {
  const { id } = req.params;
  const { name, lastName, age } = req.body;
  const updateRes = await User.updateOne({ _id: id }, { name, lastName, age });
  res.json(updateRes);
}
