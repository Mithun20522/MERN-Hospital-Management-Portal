import express from 'express';
import { createHospital, deleteHospital, getAllHospitals, getHospital, updateHospital } from '../controllers/hospital.controller.js';
import { verifyToken } from '../middlewares/verify.js';
const hospitalRouter = express.Router();

hospitalRouter.post('/create-hospital', verifyToken, createHospital);
hospitalRouter.get('/get-hospitals', getAllHospitals);
hospitalRouter.get('/get-hospital/:id', getHospital);
hospitalRouter.patch('/update-hospital/:id', verifyToken, updateHospital);
hospitalRouter.delete('/delete-hospital/:id', verifyToken, deleteHospital);

export default hospitalRouter;