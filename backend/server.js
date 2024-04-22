import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectMongoDB } from './db/connectMongoDB.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());


const PORT = process.env.PORT || 3000;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

connectMongoDB(MONGO_DB_URL)


app.use('/api/auth',authRouter);

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));