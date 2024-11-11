import mongoose from "mongoose";
import { Model } from "../../models/model_model.js";

// Create new model
export const new_model = async (payload) => {
  try {
    const create_new_model = new Model(payload);
    const save_model = await create_new_model.save();
    return save_model;
  } catch (error) {
    console.log(error.message);
  }
};

// Update model

export const update_model = async (payload) => {
  try {
    const update_data = await Model.findByIdAndUpdate(
      { _id: payload.id },
      payload,
      { new: true }
    );
    return update_data;
  } catch (error) {
    console.log(error.message);
  }
};

// Delete model

export const remove_model = async (payload) => {
  try {
    const delete_model = await Model.findByIdAndDelete({ _id: payload.id });
    return delete_model;
  } catch (error) {
    console.log(error.message);
  }
};

// Get model by make id

export const get_model_by_make_id = async (make_id, name_en, name_ar) => {
  try {
    let filter = {};
    if (make_id) {
      filter.make_id = new mongoose.Types.ObjectId(make_id);
    }
    if (name_en) {
      filter.name_en = { $regex: new RegExp(name_en, "i") };
    }
    if (name_ar) {
      filter.name_ar = { $regex: new RegExp(name_ar, "i") };
    }
    const data = await Model.aggregate([
      {
        $match: filter,
      },
    ]);

    return data 
  } catch (error) {
    console.log("Error fetching model by make_id:", error.message);
    
  }
};
