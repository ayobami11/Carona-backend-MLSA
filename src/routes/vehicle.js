import { Router } from "express";
import { getVehicle, getAllVehicles, createVehicle, updateVehicle, deleteVehicle} from "../controllers/vehicle.js";

const vehicleRouter = Router()

vehicleRouter.get("/:id", getVehicle)
vehicleRouter.get("/", getAllVehicles)
vehicleRouter.post("/", createVehicle)
vehicleRouter.patch("/:id", updateVehicle)
vehicleRouter.delete("/:id", deleteVehicle)

export default vehicleRouter