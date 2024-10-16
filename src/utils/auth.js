import bcryptjs from "bcryptjs"
const { genSaltSync, hashSync, compareSync } = bcryptjs

import jsonwebtoken from "jsonwebtoken"
const { sign, verify } = jsonwebtoken

import { configDotenv } from "dotenv"

configDotenv()

const jwt_secret = process.env.JWT_SECRET

export const generateHashedValue = (password) => {
    const salt = genSaltSync(10)
    return hashSync(password, salt)
}

export const isPasswordCorrect = (password1, password2) => {
    return compareSync(password1, password2)
} 

export const createAccessToken = (id) => {
    const token = sign({id}, jwt_secret, {expiresIn: "1h"})
    return token
}

export const isTokenValid = (token) => {
    return verify(token, jwt_secret)
}






// encapsulating the information from db
export const getBasicUserDetails = (user) => {
    return {
        firstName,
        lastName
    }
}

