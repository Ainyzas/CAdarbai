import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/routes.js';

dotenv.config();

const { PORT } = process.env;
const { DB_URI } = process.env;

mongoose.connect(DB_URI, () => {
  console.log('MongoDB Connected');
});

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
