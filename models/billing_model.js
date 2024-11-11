import mongoose from "mongoose";

const billing_schema = new mongoose.Schema({
  car_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
  },
  chases_no: {
    type: Number,
  },
  price: {
    type: Number,
  },
  paid_amount: {
    type: Number,
  },
  remaining_amount:{
    type: Number,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
  },
  selling_date: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["paid", "remaining"],
  },
});

const Billing = mongoose.model("Billing", billing_schema);
export { Billing };



