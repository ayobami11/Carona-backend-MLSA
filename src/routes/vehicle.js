import { Router } from "express";
import isLoggedIn from "../middlewares/auth.js";
import { getVehicle, getAllVehicles, createVehicle, updateVehicle, deleteVehicle} from "../controllers/vehicle.js";

const vehicleRouter = Router()

vehicleRouter.get("/", isLoggedIn, getAllVehicles)
vehicleRouter.get("/:id", isLoggedIn, getVehicle)
vehicleRouter.post("/", isLoggedIn, createVehicle)
vehicleRouter.patch("/:id", isLoggedIn, updateVehicle)
vehicleRouter.delete("/:id", isLoggedIn, deleteVehicle)

export default vehicleRouter