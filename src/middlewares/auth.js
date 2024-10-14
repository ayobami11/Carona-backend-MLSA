import { errorResponse } from "../utils/responses.js"
import { isTokenValid } from "../utils/auth.js"
import { StatusCodes } from "http-status-codes"

const isLoggedIn = (req, res, next) => {
    const authHeader = req.headers['authorization']


    if (!authHeader){
        return next(errorResponse(res, StatusCodes.BAD_REQUEST, 'unauthorized'))
    }

    if (authHeader.startsWith('Bearer')){

        const token = authHeader.split(' ')[1]

        try{
            const payload = isTokenValid(token)
            req.user = {userId: payload.id}
            next()
        }catch(error){
            return next(errorResponse(res, StatusCodes.BAD_REQUEST, 'Authentication failed'))
        }
    }else{
        return next(errorResponse(res, StatusCodes.BAD_REQUEST, 'Invalid authorization header'))
    }
}

export default isLoggedIn