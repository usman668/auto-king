import { Color } from "../../models/colors_model.js";

// Create a new data

export const new_color = async (payload) => {
  try {
    const new_data = new Color(payload);
    const save_data = await new_data.save();
    return save_data;
  } catch (error) {
    console.log(error.message);
  }
};

// Get all data

export const get_all_colors = async () => {
  try {
    const data = await Color.aggregate([
      {
        $match: {},
      },
    ]);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// Update data

export const update_color = async (payload) => {
  try {
    const data = await Color.findByIdAndUpdate({ _id: payload.id }, payload, {
      new: true,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// Delete data

export const delete_color = async (payload) => {
  try {
    const data = await Color.findByIdAndDelete({ _id: payload.id });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// 