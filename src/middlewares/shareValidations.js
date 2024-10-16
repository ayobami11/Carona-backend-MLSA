import { z } from "zod";
import { StatusCodes } from "http-status-codes";
import { errorResponse} from "../utils/responses.js";

const shareSchema = z.object({
    from: z.string({
        required_error: "Start of Trip is Required",
        invalid_type_error: "Must be a string"
    })
            .trim()
            .toLowerCase(),

    to: z.string({
        required_error: "End  of Trip is Required",
        invalid_type_error: "Must be a string"
    })
            .trim()
            .toLowerCase(),

    tripstatus: z.enum(['waiting','ongoing','completed'],{message: "Trip Status must be One of the following Options"}),
                 

    maxRiders: z.number({
        required_error: "Number of Riders allowed to join is required",
        invalid_type_error: "Only Numbers are allowed to be entered"
            })
                .positive({message: "Only Postive Numbers are allowed"})
                
})

export const shareValidation = async(req, res, next) =>{
    try{
    const caronaShareData = shareSchema.safeParse(req.body)
    
    if(!caronaShareData.success){
        const validationErrors = caronaShareData.error.errors.map(err => ({
            field: err.path[0],
            message: err.message,
        }));
  
        return errorResponse(res,StatusCodes.BAD_REQUEST,{
            message : "Validation Failed, Try again!",
            validationErrors
        })
    }

    req.validatedShare = caronaShareData.data 
    next()
    }
    catch(error){
        console.log(error)
        next(error)
    }
}
