import { StatusCodes } from "http-status-codes"
import { errorResponse } from "../utils/responses.js"

const errorHandler = (error, req, res, next) => {
    let message = "Something doesn't work"
    let errCode = StatusCodes.INTERNAL_SERVER_ERROR



    if (error instanceof Error){
        if (error.name === 'ValidationError'){
            message = error.message
            errCode = StatusCodes.UNPROCESSABLE_ENTITY
        }else if (error.name === 'MongoServerError'){
            if (error.errorResponse.code === 11000){
                message = "Resource already exists"
                errCode = StatusCodes.CONFLICT
            }
    }
}




    errorResponse(res, errCode, message)

}


export default errorHandler