import mongoose from "mongoose";
import { Car } from "../../models/car_model.js";

// Get all data

export const get_all_cars = async () => {
  try {
    const data = await Car.aggregate([
      {
        $match: {},
      },
    ]);
    return data;
  } catch (error) {
    console.log(error.messsage);
  }
};
// get cars by showroom id
// Update data

export const update_car = async (payload) => {
  try {
    const updated_data = await Car.findByIdAndUpdate(
      { _id: payload.id },
      payload,
      { new: true }
    );
    return updated_data;
  } catch (error) {
    console.log(error.messsage);
  }
};

// Delete data

export const delete_car = async (payload) => {
  try {
    const delete_data = await Car.findByIdAndDelete({ _id: payload.id });
    return delete_data;
  } catch (error) {
    console.log(error.messsage);
  }
};

// Get car by showroom id

export const get_car_by_showroom = async (showroom_id) => {
  try {
    const data = await Car.aggregate([
      {
        $match: { showroom_id: new mongoose.Types.ObjectId(showroom_id) },
      },
      {
        $lookup: {
          from: "showrooms",
          localField: "showroom_id",
          foreignField: "_id",
          as: "showroom_details",
        },
      },
    ]);
    return data;
  } catch (error) {
    console.log(error.messsage);
  }
};

// Get car by make model trim id.

export const get_car = async (make_id, model_id, trim_id) => {
  try {
    console.log("Input IDs:", make_id, model_id, trim_id);
    const matchCriteria = {};
    if (make_id) matchCriteria.make_id = new mongoose.Types.ObjectId(make_id);
    if (model_id)
      matchCriteria.model_id = new mongoose.Types.ObjectId(model_id);
    if (trim_id) matchCriteria.trim_id = new mongoose.Types.ObjectId(trim_id);

    const car_data = await Car.aggregate([
      {
        $match: matchCriteria,
      },
      {
        $lookup: {
          from: "makes",
          localField: "make_id",
          foreignField: "_id",
          as: "make_result",
        },
      },
      {
        $lookup: {
          from: "models",
          localField: "model_id",
          foreignField: "_id",
          as: "model_result",
        },
      },
      {
        $lookup: {
          from: "trims",
          localField: "trim_id",
          foreignField: "_id",
          as: "trim_result",
        },
      },
    ]);

    const car = car_data[0];

    if (!car) {
      return {
        car: null,
        recommended_car: [],
        message: "No car found for the provided IDs.",
      };
    }

    let recommended_car = await Car.aggregate([
      {
        $match: {
          make_id: new mongoose.Types.ObjectId(make_id),
          model_id: { $ne: new mongoose.Types.ObjectId(model_id) },
          trim_id: { $ne: new mongoose.Types.ObjectId(trim_id) },
          _id: { $ne: car._id },
          selling_status: "available",
        },
      },
      {
        $lookup: {
          from: "makes",
          localField: "make_id",
          foreignField: "_id",
          as: "make_result",
        },
      },
      {
        $lookup: {
          from: "models",
          localField: "model_id",
          foreignField: "_id",
          as: "model_result",
        },
      },
      {
        $lookup: {
          from: "trims",
          localField: "trim_id",
          foreignField: "_id",
          as: "trim_result",
        },
      },
    ]);
    if (!recommended_car.length) {
      recommended_car = await Car.aggregate([
        {
          $match: {
            make_id: new mongoose.Types.ObjectId(make_id),
            _id: { $ne: car._id },
            selling_status: "available",
          },
        },
        {
          $lookup: {
            from: "makes",
            localField: "make_id",
            foreignField: "_id",
            as: "make_result",
          },
        },
        {
          $lookup: {
            from: "models",
            localField: "model_id",
            foreignField: "_id",
            as: "model_result",
          },
        },
        {
          $lookup: {
            from: "trims",
            localField: "trim_id",
            foreignField: "_id",
            as: "trim_result",
          },
        },
      ]);
    }

    return { car, recommended_car };
  } catch (error) {
    console.log(error.message);
    return { car: null, recommended_car: [], message: "An error occurred." };
  }
};
