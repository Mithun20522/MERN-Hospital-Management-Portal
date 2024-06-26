import express from 'express';
import { login, logout, register } from '../controllers/auth.controller.js';
const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/logout', logout);

export default authRouter;