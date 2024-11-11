import express from "express";
import { new_showroom } from "../controllers/showroom_controller.js";
import { upload } from "../utils/multer.js";
const showroom_routes = express.Router();

showroom_routes.post("/new_showroom",upload.single("logo") ,new_showroom)

export {
    showroom_routes
}