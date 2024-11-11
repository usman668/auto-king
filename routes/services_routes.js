import express from "express";
import { upload } from "../utils/multer.js";
import { create_service } from "../controllers/services_controller.js";
const service_routes = express.Router();

service_routes.post("/new_service", upload.single("image"), create_service);

export { service_routes };
