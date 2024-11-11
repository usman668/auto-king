import mongoose from "mongoose";

const car_schema = new mongoose.Schema({
  images: {
    type: Array,
  },
  accident_images: {
    type: Array,
  },
  title_en: {
    type: String,
  },
  title_ar: {
    type: String,
  },
  showroom_ariving_date: {
    type: Date,
  },
  going_for_fixing_date: {
    type: Date,
  },
  ready_date: {
    type: Date,
  },
  services: [
    {
      service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Services",
      },
      cost: {
        type: String,
      },
      service_name: {
        type: String,
      },
    },
  ],
  car_selling_price: {
    type: Number,
  },
  actual_price: {
    type: Number,
  },
  cost_of_fixing: {
    type: Number,
  },
  is_auto_king_car: {
    type: Boolean,
  },
  selling_status: {
    type: String,
    enum: ["available", "sold", "under_fixing"],
    default: "available",
  },
  showroom_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Showroom",
  },
  dealership_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  exterior_color: {
    type: String,
  },
  interior_color: {
    type: String,
  },
  owner: {
    type: String,
  },
  civil_id: {
    type: String,
  },
  make_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Make",
  },
  model_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Model",
  },
  trim_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trim",
  },
  miles: {
    type: Number,
  },
  fuel: {
    type: String,
  },
  transmission: {
    type: String,
  },
  discription: {
    type: String,
  },
});

const Car = mongoose.model("Car", car_schema);
export { Car };
