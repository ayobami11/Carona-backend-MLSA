import { Router } from "express";
import { registerAccount } from "../controllers/auth.js";

const authRouter = Router()
authRouter.post('/register', registerAccount)


export default authRouter