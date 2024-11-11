import { get_showrooms, update_showroom, delete_showroom } from "../../utils/showroom/index.js";
import { showroom_actions } from "./actions.js";

export const showroom_module = (io, socket) => {

    // Get All Showrooms
    socket.on(showroom_actions.get_showrooms, async (payload, callback) => {
      try {
        const response = await get_showrooms();
        callback({ message: "success", data: response });
      } catch (error) {
        callback({ message: error.message });
      }
    });
  
    // Update Showroom
     socket.on(showroom_actions.update_showroom, async (payload, callback) => {
     try {
      const response = await update_showroom(payload);
      callback({ message: "success", data: response });
     } catch (error) {
      callback({ message: error.message });
     }
     })
  
    //  Delete Showroom
     socket.on(showroom_actions.delete_showroom, async (payload, callback) => {
        try {
          let response = await delete_showroom(payload);
          callback({ message: "success", data: response });
        } catch (error) {
          callback({ message: error.message });
        }
      });

  };