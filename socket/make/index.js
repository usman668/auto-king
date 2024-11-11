import {
  new_make,
  update_make,
  get_make,
  delete_make,
} from "../../utils/make/index.js";
import { make_actions } from "./actions.js";

export const make_module = (io, socket) => {
  socket.on(make_actions.create_new_make, async (payload, callback) => {
    try {
      const response = await new_make(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  socket.on(make_actions.update_make, async (payload, callback) => {
    try {
      const response = await update_make(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  socket.on(make_actions.get_make, async (payload, callback) => {
    try {
      const response = await get_make(payload.name_ar, payload.name_en);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  socket.on(make_actions.delete_make, async (payload, callback) => {
    try {
      const response = await delete_make(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });
};
