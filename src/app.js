import express from "express";
import { PORT } from "./config/env.js";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.js";
import tripRouter from "./routes/trip.js";
import { API_VERSION } from "./config/env.js";
import errorHandler from "./middlewares/errorHandler.js";
// import routes from "./routes/routes.js"
import vehicleRouter from "./routes/vehicle.js";

const app = express()


app.use(express.json())

// routes
app.use(`/api/v${API_VERSION}/auth`, authRouter) // http://localhost:3000/api/v1/auth
app.use(`/api/v${API_VERSION}/trips`, tripRouter) // http://localhost:3000/api/v1/trips

app.use("/vehicle", vehicleRouter)
app.use("/auth", authRouter)

// error handler and stuff middlewares

app.use(errorHandler)


app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server started. Listening on http://localhost:${PORT}`)
})

