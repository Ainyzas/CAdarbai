import User from '../../db/user.js';

export async function deleteUserById(req, res) {
  const { id } = req.params;
  const deleteRes = await User.findByIdAndDelete(id);
  res.json(deleteRes);
}
