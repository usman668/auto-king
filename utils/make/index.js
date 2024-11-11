import { Make } from "../../models/make_model.js";

export const new_make = async (payload) => {
  try {
    const data = new Make(payload);
    const save_data = await data.save();
    return save_data;
  } catch (error) {
    console.log(error.message);
  }
};

export const update_make = async (payload) => {
  try {
    const data = await Make.findByIdAndUpdate(
      { _id: payload.id }, 
      payload, 
      {new: true}
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const get_make = async (name_ar, name_en) => {
  try {
    let filter = {};
    if (name_ar) filter.name_ar = { $regex: new RegExp(name_ar, "i") };
    if (name_en) filter.name_en = { $regex: new RegExp(name_en, "i") };
    const data = await Make.aggregate([
      {
        $match: filter,
      },
    ]);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const delete_make = async (payload) => {
  try {
    const remove_data = await Make.findByIdAndDelete({ _id: payload.id });
    return remove_data;
  } catch (error) {
    console.log(error.message);
  }
};
