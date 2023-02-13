import User from '../../db/user.js';

export async function postUser(req, res) {
  const { name, lastName, age } = req.body;
  const user = {
    name,
    lastName,
    age,
  };
  const newUser = await User.create(user);
  res.json(newUser);
}
