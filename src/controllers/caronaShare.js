import { StatusCodes } from "http-status-codes";


import User from "../models/auth.js";
import shareUser from "../models/shareUser.js";
import { successResponse, errorResponse } from "../utils/responses.js";
import logger from "../utils/logger.js";
//import Vehicles from "..models/vehicles.js"
//import KYC from "../models/KYC.js"


export const shareATrip = async(req, res, next) =>{
    const userId = req.user.id
    const {from, to, tripstatus, maxriders} = req.validatedShare

    try{ 
        logger.info(`START: Attempting to create a new Share Trip`)
        const user = await User.findById(userId)

        if(!user){
            return errorResponse(res, StatusCodes.NOT_FOUND, `Kindly Login to access caronaShare`)
        }
/** 
    
        if(!kyc.isVerified){
                return errorResponse(res, StatusCodes.BAD_REQUEST, `Kindly Complete KYC to access CaronaShare!`)
        }

        if(!vehicle.isVerified){
            return errorResponse(res, StatusCodes.BAD_REQUEST, `Only Users with Verified Vehicles can use Carona Share!`)
        }
   */ 

        const newsharetrip = await shareUser.create({
            from,
            to,
            tripstatus,
            maxriders,
            owner: user._id
        })

        await newsharetrip.save()

    logger.info(`END: New Share Trip was successfully created.`)
    return successResponse(res, StatusCodes.CREATED, `A Share Trip has been Created, Kindly Vet incoming requests to join your trip! remember Shine ya eyes :)`, newsharetrip)
    }

    catch(error){
        logger.error(`END: New Trip was not created successfully!`)
        next(error)
    }

}

