import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";

// Import Routes
import { user_routes } from "./routes/user_routes.js";
import { service_routes } from "./routes/services_routes.js";
import { showroom_routes } from "./routes/showroom_routes.js";
import { car_routes } from "./routes/car_routes.js";

// Socket import.
import { initSocket } from "./socket/initilization.js";

// Configure dotenv
dotenv.config();

// Initiliza app
const app = express();

// Http server
const server = http.createServer(app)

// Data base connection import
import { db_connection } from "./db/db.js";

db_connection()
  .then(() => {
    console.log(`Server is connected with data base`);
  })
  .catch((error) => {
    console.log(`Error occurs:`, error.message);
  });



app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// User route
app.use("/user", user_routes);

// Services route
app.use("/services", service_routes);

// Showroom route
app.use("/showroom", showroom_routes)

// Car route
app.use("/car", car_routes)

initSocket(server);

// Server listning
server.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});
