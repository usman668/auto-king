import { new_color, get_all_colors, update_color, delete_color } from "../../utils/colors/index.js";
import { color_actions } from "./actions.js";

export const color_module = (io, socket) => {

socket.on(color_actions.create_new_color, async (payload, callback) => {
try {
    const response = await new_color(payload);
    callback({message:"success", data:response})
} catch (error) {
    callback({message:error.message})
}
})

socket.on(color_actions.get_all_colors, async (payload, callback) => {
    try {
        const response = await get_all_colors();
        callback({message:"success", data:response})
    } catch (error) {
        callback({message:error.message})
    }
})

socket.on(color_actions.update_color, async (payload, callback) => {
    try {
        const response = await update_color(payload);
        callback({message:"success", data:response})
    } catch (error) {
        callback({message:error.message})
    }
})

socket.on(color_actions.delete_color, async (payload, callback) => {
    try {
        const response = await delete_color(payload);
        callback({message:"success", data:response})
    } catch (error) {
        callback({message:error.message})
    }
})

}