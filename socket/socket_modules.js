import { services_module } from "../socket/services/index.js";
import { showroom_module } from "../socket/showroom/index.js";
import { car_module } from "../socket/cars/index.js";
import { color_module } from "../socket/colors/index.js";
import { billing_module } from "../socket/billing/index.js";
import { make_module } from "../socket/make/index.js";
import { model_module } from "../socket/model/index.js";
import { trim_module } from "../socket/trim/index.js";

export const socket_modules = async (io, socket) => {
  try {
    // Service module
    services_module(io, socket);
    console.log(`User Connected`);

    // Showroom module
    showroom_module(io, socket);
    console.log(`User Connected`);

    // Car module
    car_module(io, socket);
    console.log(`User Connected`);

    // Color module
    color_module(io, socket);
    console.log(`User Connected`);

    // Billing module
    billing_module(io, socket);
    console.log(`User Connected`);

    // Make module
    make_module(io, socket);
    console.log(`User Connected`);

    // Model module
    model_module(io, socket);
    console.log(`User Connected`);

    // Trim module
    trim_module(io, socket)
    console.log(`User Connected`);
  } catch (error) {}
};
