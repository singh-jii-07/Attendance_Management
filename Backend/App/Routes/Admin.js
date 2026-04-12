import express from 'express'
import { login, logout, profile, register } from '../Controller/Admin.js'
import Auth from '../Middleware/Auth.js';

const adminRoute=express.Router();

adminRoute.post("/register",register)
adminRoute.post("/login",login)
adminRoute.get("/profile",Auth,profile)
adminRoute.post("/logout",logout)

export default adminRoute;