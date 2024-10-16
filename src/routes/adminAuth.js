import e from "express";

export const adminRouter = e.Router()

import isLoggedIn from "../middlewares/auth.js";

import { adminLogin, getAllUsers } from "../controllers/adminAuth.js";

adminRouter.post('/login', adminLogin)
adminRouter.get('/users', isLoggedIn, getAllUsers)
