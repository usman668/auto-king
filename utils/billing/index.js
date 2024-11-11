import mongoose from "mongoose";
import { Billing } from "../../models/billing_model.js";

// Create a new Bill

export const new_bill = async (payload) => {
  try {
    const remaining_amount = payload.price - payload.paid_amount;
    const new_data = {
      ...payload,
      status: remaining_amount === 0 ? "paid" : "remaining",
      remaining_amount: remaining_amount === 0 ? 0 : remaining_amount,
    };

    const bill = new Billing(new_data);

    const save_bill = await bill.save();
    return save_bill;
  } catch (error) {
    console.log(error.message);
  }
};

// get bill

export const get_bill = async (car_id) => {
  try {
    const bill_get = await Billing.aggregate([
      {
        $match: { car_id: new mongoose.Types.ObjectId(car_id) },
      },
      {
        $lookup: {
          from: "cars",
          localField: "car_id",
          foreignField: "_id",
          as: "car_details",
        },
      },
      {
        $project: {
          chases_no: 1,
          price: 1,
          car_details: ["$car_details"],
        },
      },
    ]);
    return bill_get;
  } catch (error) {
    console.log(error.message);
  }
};
