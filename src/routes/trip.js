import { Router } from "express";
import { createTrip, getTrip, deleteTrip } from "../controllers/trip.js";

const tripRouter = Router();

tripRouter.get('/:id', getTrip);

tripRouter.post('/', createTrip);

tripRouter.delete('/:id', deleteTrip);

export default tripRouter;