import express from 'express'
import { login, register } from '../Controller/Admin.js'

const adminRoute=express.Router();

adminRoute.post("/register",register)
adminRoute.post("/login",login)

export default adminRoute;