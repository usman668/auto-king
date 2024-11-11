import {
  new_trim,
  update_trim,
  delete_trim,
  get_trim_by_model_id,
} from "../../utils/trim/index.js";
import { trim_actions } from "./actions.js";

export const trim_module = (io, socket) => {
  socket.on(trim_actions.create_trim, async (payload, callback) => {
    try {
      const response = await new_trim(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.messsage });
    }
  });

  socket.on(trim_actions.update_trim, async (payload, callback) => {
    try {
      const response = await update_trim(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.messsage });
    }
  });

  socket.on(trim_actions.delete_trim, async (payload, callback) => {
    try {
      const response = await delete_trim(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.messsage });
    }
  });

  socket.on(trim_actions.get_trim, async (payload, callback) => {
    try {
      const response = await get_trim_by_model_id(
        payload.model_id,
        payload.name_en,
        payload.name_ar
      );
      callback({ message: "success", data: response });
    } catch (error) {
        callback({ message: error.messsage });
    }
  });
};
