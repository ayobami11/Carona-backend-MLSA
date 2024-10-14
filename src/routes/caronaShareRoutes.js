import express from "express"

// import tokenAuthentication from "../middlewares/"
import { shareValidation } from "../middlewares/shareValidations.js"
import { shareATrip } from "../controllers/caronaShare.js"

export const shareRouter = express.Router()

shareRouter.post('/create', /*IsLoggedInMiddleware*/ shareValidation, shareATrip)


