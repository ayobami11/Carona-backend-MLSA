import { configDotenv } from "dotenv"

configDotenv()

export const PORT = process.env.PORT
export const MONGO_URI = process.env.MONGO_URI
export const API_VERSION = 1