import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/route.js';

dotenv.config();

const { PORT } = process.env;
const { DB_URI } = process.env;

mongoose.connect(DB_URI, () => console.log('connected'));

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
