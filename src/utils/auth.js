import bcryptjs from "bcryptjs"

const { genSaltSync, hashSync, compareSync } = bcryptjs;



export const generateHashedValue = (value) => {
    const salt = genSaltSync(10)
    return hashSync(value, salt)
}

export const checkValidPassword = (value, hash) => {

} 










// encapsulating the information from db
export const getBasicUserDetails = (user) => {
    return {
        firstName,
        lastName
    }
}

