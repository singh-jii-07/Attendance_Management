import express from 'express'
import { login, profile, register } from '../Controller/Admin.js'
import Auth from '../Middleware/Auth.js';

const adminRoute=express.Router();

adminRoute.post("/register",register)
adminRoute.post("/login",login)
adminRoute.get("/profile",Auth,profile)

export default adminRoute;