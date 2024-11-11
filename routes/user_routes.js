import express from "express";
import { Signup, Login } from "../controllers/user_controller.js";

const user_routes = express.Router();

// Signup
user_routes.post("/signup", Signup);

// Login
user_routes.post("/login", Login);

export { user_routes };
