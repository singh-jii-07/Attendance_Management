import express from 'express'
import { register } from '../Controller/Admin.js'

const adminRoute=express.Router();

adminRoute.post("/register",register)

export default adminRoute;