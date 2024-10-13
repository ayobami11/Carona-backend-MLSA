import { Router } from "express";
import { createRoute, deleteRoute, getAllRoutes, getRoute, updateRoute } from "../controllers/routes.js";


export const routes = Router()

routes.post('/',  createRoute)
routes.get('/', getAllRoutes)
routes.get("/:id", getRoute)
routes.delete("/:id", deleteRoute)
routes.patch("/:id", updateRoute)