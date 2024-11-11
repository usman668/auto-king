import { Services } from "../../models/services_model.js";

// Get Services.

export const get_services = async () => {
  try {
    const services_get = await Services.aggregate([
      {
        $match: {},
      },
    ]);
    return services_get;
  } catch (error) {
    console.log(error.message);
  }
};

// Update Services.

export const update_service = async (payload) => {
  try {
    const old_data = {
      name: payload.name,
    };
    const updated_service = await Services.findByIdAndUpdate(
      { _id: payload.id },
      old_data,
      { new: true }
    );
    return updated_service;
  } catch (error) {
    console.log(error.message);
  }
};
