import express from 'express';
import { verifyToken } from '../middlewares/verify.js';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.controller.js';
const userRouter = express.Router();

userRouter.get('/get-users', verifyToken, getAllUsers);
userRouter.get('/get-user/:id', getUser);
userRouter.patch('/update-user/:id', verifyToken, updateUser);
userRouter.delete('/delete-user/:id', verifyToken, deleteUser);

export default userRouter;