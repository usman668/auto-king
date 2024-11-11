import { Trim } from "../../models/trim_model.js";
import mongoose from "mongoose";
// Create trim

export const new_trim = async (payload) => {
  try {
    const trim_data = new Trim(payload);
    const save_data = await trim_data.save();
    return save_data;
  } catch (error) {
    console.log(error.message);
  }
};

// Update trim.

export const update_trim = async (payload) => {
  try {
    const data = await Trim.findByIdAndUpdate({ _id: payload.id }, payload, {
      new: true,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// Delete trim.

export const delete_trim = async (payload) => {
  try {
    const data = await Trim.findByIdAndDelete({ _id: payload.id });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// Get trim by model id

export const get_trim_by_model_id = async (model_id, name_en, name_ar) => {
  try {
    let filter = {};
    if (model_id) {
      filter.model_id = new mongoose.Types.ObjectId(model_id);
    }
    if (name_en) {
      filter.name_en = { $regex: new RegExp(name_en, "i") };
    }
    if (name_ar) {
      filter.name_ar = { $regex: new RegExp(name_ar, "i") };
    }
    const data = await Trim.aggregate([
      {
        $match: filter,
      },
    ]);

    return data 
  } catch (error) {
    console.log(error.message);
    
  }
};
