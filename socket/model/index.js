import {
  new_model,
  update_model,
  remove_model,
  get_model_by_make_id,
} from "../../utils/model/index.js";
import { model_actions } from "./actions.js";

export const model_module = (io, socket) => {
  socket.on(model_actions.create_model, async (payload, callback) => {
    try {
      const response = await new_model(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

  socket.on(model_actions.update_model, async (payload, callback) => {
    try {
      const response = await update_model(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });


socket.on(model_actions.get_model, async (payload, callback) => {
  try {
    const response = await get_model_by_make_id(payload.make_id, payload.name_en, payload.name_ar);
    callback({ message: "success", data: response });
  } catch (error) {
    callback({ message: error.message });
  }
});


  socket.on(model_actions.delete_model, async (payload, callback) => {
    try {
      const response = await remove_model(payload);
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });
};
