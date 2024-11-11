import { get_services, update_service } from "../../utils/services/index.js";
import { services_actions } from "./actions.js";

export const services_module = (io, socket) => {

  socket.on(services_actions.get_services, async (payload, callback) => {
    try {
      const response = await get_services();
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

   socket.on(services_actions.update_service, async (payload, callback) => {
   try {
    const response = await update_service(payload);
    callback({ message: "success", data: response });
   } catch (error) {
    callback({ message: error.message });
   }
   })

};
