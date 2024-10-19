import { Router } from "express";
import isLoggedIn from "../middlewares/auth.js";
import { getAllTrips, getATrip, createTrip, deleteTrip } from "../controllers/trip.js";

const tripRouter = Router();

tripRouter.get('/', isLoggedIn, getAllTrips);
tripRouter.get('/:id', isLoggedIn, getATrip);

tripRouter.post('/', isLoggedIn, createTrip);

tripRouter.delete('/:id', isLoggedIn, deleteTrip);

export default tripRouter;