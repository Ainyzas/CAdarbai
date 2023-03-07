import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/router.js';

dotenv.config();
const { PORT } = process.env || 3000;
const { MONGO_URI } = process.env || '';

mongoose
  .connect(MONGO_URI)
  .then(console.log('Connected to Mongo DB'))
  .catch((error) => console.log(error));

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
