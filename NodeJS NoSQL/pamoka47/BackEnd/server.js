// import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import cors from 'cors';
// import router from './routes/mainRouter.js';
import User from './db/User.js';

dotenv.config();
// const { PORT } = process.env;

const { DB_URI } = process.env;
mongoose.connect(
  DB_URI,
  () => {
    console.log('connencted to MongoDB');
  },
  (e) => {
    console.log(e);
  },
);

async function getUsers() {
  try {
    const users = await User.find(
      {},
      {
        name: true,
        age: true,
        hobbies: true,
        address: true,
      },
    );
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
}

async function getUsersWhere() {
  try {
    const users = await User.where('age').gte(19).where('name').equals('Ainas');

    console.log(users);
  } catch (e) {
    console.log(e);
  }
}

async function updateUsers() {
  try {
    const user = await User.updateMany(
      { age: 15 },
      {
        address: {
          street: 'Streetson',
          number: '21G',
        },
      },
    );
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

async function deleteUsers() {
  try {
    const users = await User.deleteMany({ address: { street: 'Streetson', number: '21G' } });

    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
}

async function createUser() {
  try {
    const user = await User.create({
      name: 'Ainas',
      age: 19,
      hobbies: ['Gaming', 'Coding'],
      address: {
        street: 'streetsville',
        number: 54,
      },
    });

    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

// createUser();
// getUsers();
getUsersWhere();
// updateUsers();
// deleteUsers();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(router);

// app.listen(PORT, () => {
//   console.log(`app is running on port ${PORT}`);
// });
