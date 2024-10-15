import { Router } from "express";
import { createRoute, deleteRoute, getAllRoutes, getRoute, updateRoute } from "../controllers/routes.js";
import isLoggedIn from "../middlewares/auth.js";



export const routes = Router()

routes.post('/',  createRoute)
routes.get('/', isLoggedIn,  getAllRoutes)
routes.get("/:id", isLoggedIn, getRoute)
routes.delete("/:id", deleteRoute)
routes.patch("/:id", updateRoute)