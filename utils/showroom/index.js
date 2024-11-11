import { Showroom } from "../../models/showroom_model.js";

// Get Showrooms

export const get_showrooms = async () => {
  try {
    const showrooms_get = await Showroom.aggregate([
      {
        $match: {},
      },
    ]);
    return showrooms_get;
  } catch (error) {
    console.log(error.message);
  }
};

// Update Services.

export const update_showroom = async (payload) => {
  try {
    const old_data = {
      name: payload.name,
      address: payload.address,
      is_active: payload.is_active,
      location: payload.location,
    };
    const updated_showroom = await Showroom.findByIdAndUpdate(
      { _id: payload.id },
      old_data,
      { new: true }
    );
    return updated_showroom;
  } catch (error) {
    console.log(error.message);
  }
};

//  Delete Showroom

export const delete_showroom = async (payload) => {
  try {
    const deleted_showroom = await Showroom.findByIdAndDelete({
      _id: payload.id,
    });
    return deleted_showroom;
  } catch (error) {
    console.log(error.message);
  }
};
