import mongoose from "mongoose";

const model_schema = new mongoose.Schema({
  make_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Make",
  },
  name_en: {
    type: String,
  },
  name_ar: {
    type: String,
  },
});

const Model = mongoose.model("Model", model_schema);
export { Model };
