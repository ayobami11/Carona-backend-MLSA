import { StatusCodes } from "http-status-codes";


import User from "../models/auth.js";
import logger from "../utils/logger.js";
import { successResponse, errorResponse } from "../utils/responses.js";
import { createAccessToken, isPasswordCorrect } from "../utils/auth.js";

//Admin should register, for a user to be able to login to the admin route he must be marked as an admin else rejected


export const adminLogin = async(req, res, next) =>{
    const {username, password} = req.body

    try{
        logger.info(`START: Attempting to login as an admin`)
        const user = await User.findOne({username})
        if(!user){
            return errorResponse(res, StatusCodes.NOT_FOUND, `User does not exist, please Register!`)
        }

        const passwordCorrect = isPasswordCorrect(password, user.password)
        
        if(!passwordCorrect){
            return errorResponse(res, StatusCodes.BAD_REQUEST, `Password is Wrong! retry.`)
        }

        if(user.role !== 'admin'){
            console.log(user)
            return errorResponse(res, StatusCodes.FORBIDDEN, `User is not an admin, Access Denied`)
        }

        const accessToken = createAccessToken(user._id)
        logger.info(`END: Admin Login Successful`)

        return successResponse(res, StatusCodes.CREATED, `Logged In as an Admin`, {user, accessToken})
    }
    catch(error){
        logger.error(`END: Admin login was not successfull`)
        console.log(error)
        next(error)
    }
}


//Giving admin access to get all Users
export const getAllUsers = async(req, res, next) => {
    const userId = req.user.userId

    try {
        logger.info(`START: Attempting to get all carona Users`)
        const user = await User.findById(userId)
        if(!user){
            return errorResponse(res, StatusCodes.NOT_FOUND, `User does not exist, Please register!`)
        }

        if(user.role !== 'admin'){
            return errorResponse(res, StatusCodes.FORBIDDEN, `Access Denied`)
        }

        const allusers = await User.find()

        logger.info(`END: All Users Gotten!`)
        return successResponse(res, StatusCodes.OK, `All Users Signed Up with Carona`, allusers)
        
    } catch (error) {
        logger.error(`END: Failed to get all Carona Users!`)
        next(error)
    }
}