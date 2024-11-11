import mongoose from "mongoose";

const color_schema = new mongoose.Schema({
  color_name: {
    type: String,
  },
  color_code: {
    type: String,
  },
});

const Color = mongoose.model("Color", color_schema);
export { Color };
