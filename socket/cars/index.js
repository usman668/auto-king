import {
  delete_car,
  get_all_cars,
  update_car,
  get_car_by_showroom,
  get_car,
} from "../../utils/cars/index.js";
import { car_actions } from "./actions.js";

export const car_module = (io, socket) => {
  // Get data
  socket.on(car_actions.get_all_cars, async (payload, callback) => {
    try {
      const response = await get_all_cars();
      callback({ message: "Data get successfully", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  // update data
  socket.on(car_actions.update_car, async (payload, callback) => {
    try {
      const response = await update_car(payload);
      callback({ message: "Data updated successfully", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  // Delete data
  socket.on(car_actions.delete_car, async (payload, callback) => {
    try {
      const response = await delete_car(payload);
      callback({ message: "Data deleted successfully", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  // get data by showroom id.

  socket.on(car_actions.get_car_by_showroom_id, async (payload, callback) => {
    try {
      const response = await get_car_by_showroom(payload.showroom_id);
      callback({ message: "Data get successfully", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  // get data by make model trim id.
  socket.on(car_actions.car_get_by_make_model_trim, async (payload, callback) => {
    console.log('Received Payload:', payload); // Log the payload for debugging
    try {
      const response = await get_car(
        payload.make_id,
        payload.model_id,
        payload.trim_id
      );
      callback({ message: "Data retrieved successfully", data: response });
    } catch (error) {
      console.error("Error occurred:", error); // Log the error
      callback({ message: error.message });
    }
  });
  
  
};
