import { new_bill, get_bill } from "../../utils/billing/index.js";
import { billing_actions } from "./actions.js";


export const billing_module = (io, socket) =>{

  socket.on(billing_actions.create_bill, async (payload, callback) => {
    try {
       const response = await new_bill(payload) ;
       callback({message:"success", data:response});
    } catch (error) {
        callback({message: error.message})
    }
  })

  socket.on(billing_actions.get_bill, async (payload, callback) => {
    try {
      const response = await get_bill(payload.car_id); 
      callback({ message: "success", data: response });
    } catch (error) {
      callback({ message: error.message });
    }
  });

}