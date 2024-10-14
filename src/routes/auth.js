import { Router } from "express";
import { changePassword, loginAccount, registerAccount } from "../controllers/auth.js";

const authRouter = Router()
authRouter.post('/register', registerAccount)
authRouter.post("/login", loginAccount)
authRouter.patch("/change-password", changePassword)
import { signUpValidation } from "../middlewares/authValidations.js";

const authRouter = Router()
authRouter.post('/register', signUpValidation, registerAccount)


export default authRouter
