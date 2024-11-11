import express from "express";
import { new_car } from "../controllers/car_controller.js";
import { cpUpload } from "../utils/multer.js";
const car_routes = express.Router();

car_routes.post("/new_car", cpUpload, new_car);

export {
    car_routes
}