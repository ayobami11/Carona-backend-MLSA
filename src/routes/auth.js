import { Router } from "express";
import { registerAccount } from "../controllers/auth.js";
import { signUpValidation } from "../middlewares/authValidations.js";

const authRouter = Router()
authRouter.post('/register', signUpValidation, registerAccount)


export default authRouter