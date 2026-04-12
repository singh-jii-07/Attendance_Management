import express from 'express';
import Auth from '../Middleware/Auth.js';
import adminMiddleware from '../Middleware/adminMiddleware.js';
import { register } from '../Controller/Teacher.js';

const teacherRoute=express.Router();

teacherRoute.post("/register",Auth,adminMiddleware,register)



export default teacherRoute;