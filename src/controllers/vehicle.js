import { Vehicle } from "../models/vehicle.js";
import {StatusCodes} from "http-status-codes"
import logger from "../utils/logger.js"
import {errorResponse} from "../utils/responses.js"
import {successResponse} from "../utils/responses.js"
const { error } = pkg1
import pkg1 from "winston"

export const createVehicle = async (req, res, next) => {
    try {
        logger.info("START: Create Vehicles")

        const {carName, driver, model, colour, plateNumber, numberOfSeats, AC, isLicenced} = req.body

        const existingVehicle = await Vehicle.findOne({plateNumber})

        if (existingVehicle) {
            return errorResponse(res, StatusCodes.BAD_REQUEST, "vehicle already exists")
        }

        if (!carName || !driver || !model || !colour || !plateNumber || !numberOfSeats) {
            logger.info("END: Create Vehicles")

            return errorResponse(res, StatusCodes.UNPROCESSABLE_ENTITY, "missing parameter(s)")

        }

        const newVehicle = await Vehicle.create({carName, driver, model, plateNumber, numberOfSeats, AC, isLicenced, colour})

        if (!newVehicle) {
            logger.info("END: Create Vehicles")

            return errorResponse(res, StatusCodes.UNPROCESSABLE_ENTITY, "missing parameter(s)")

        }
        logger.info("END: Create Vehicles")

        successResponse(res, StatusCodes.CREATED, "new vehicle created successfully")
    }
    catch(error){
        logger.error(error)
        next(error)
    }
}

export const getVehicle = async (req, res, next) => {
    try {
    logger.info("START: Get Vehicle")

    const vehicleId = req.params.id

    const oneVehicle = await Vehicle.findOne({_id: vehicleId})

    if (!oneVehicle && error.name !== "CastError") {
        logger.info("END: Get Vehicle")
        
        return errorResponse(res, StatusCodes.BAD_REQUEST, "could not get vehicle")
    }

    logger.info("END: Get Vehicle")

    successResponse(res, StatusCodes.OK, "Vehicle fetched successfully", oneVehicle)
}catch(error) {

    if (error.name === 'CastError') {
        
        logger.info("END: Get Vehicle")

        return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, "invalid Vehicle")
    }

    logger.error(error)
    next(error)}

}

export const getAllVehicles = async (req, res, next) => {
    try {
        logger.info("START: Get All Vehicles")

        const allVehicles = await Vehicle.find({})

        if (!allVehicles) {
            logger.info("END: Get All Vehicles")
            
            return errorResponse(res, StatusCodes.BAD_REQUEST, "no vehicle was found")

        }

        logger.info("END: Get All Vehicles")

        successResponse(res, StatusCodes.CREATED, "all vehicles fetched successfully", allVehicles)
    }
    catch(error){
        logger.error(error)
        next(error)
    }
}

export const updateVehicle = async (req, res, next) => {
    try {
        logger.info("START: Update Vehicle")

        const vehicleId = req.params.id

        const {carName, driver, model, colour, plateNumber, numberOfSeats, AC, isLicenced} = req.body

        const vehicle = await Vehicle.findOneAndUpdate({_id: vehicleId}, {carName, driver, model, colour, plateNumber, numberOfSeats, AC, isLicenced})

        if (!vehicleId) {
            logger.info("END: Update Vehicle")

            return errorResponse(res, StatusCodes.BAD_REQUEST, "vehicle does not exist")
        }

        else if (!(carName || driver || model || colour || plateNumber || numberOfSeats || AC || isLicenced)) {
            logger.info("END: Update Vehicle")
            
            return errorResponse(res, StatusCodes.BAD_REQUEST, "nothing to update here")

        }

        logger.info("END: Update Vehicles")

        successResponse(res, StatusCodes.CREATED, "vehicle updated successfully")
    }
    catch(error){
        if (error.name === 'CastError') {
        
            logger.info("END: Update Vehicle")
    
            return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, "invalid Vehicle")
        }
        logger.error(error)
        next(error)
    }
}

export const deleteVehicle = async (req, res, next) => {
    try {
        logger.info("START: Delete Vehicles")

        const vehicleId = req.params.id

        const vehicle = await Vehicle.findOneAndDelete({_id: vehicleId})

        if (!vehicle) {
            logger.info("END: Delete Vehicles")
            
            return errorResponse(res, StatusCodes.BAD_REQUEST, "no vehicle to delete here")

        }

        logger.info("END: Delete Vehicles")

        successResponse(res, StatusCodes.OK, "vehicle deleted successfully")
    }
    catch(error){
        if (error.name === 'CastError') {
        
            logger.info("END: Delete Vehicle")
    
            return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, "invalid Vehicle")
        }
        logger.error(error)
        next(error)
    }
}