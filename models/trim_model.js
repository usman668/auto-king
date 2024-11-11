import mongoose from "mongoose";

const trim_schema = new mongoose.Schema({
  model_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Model",
  },
  name_en: {
    type: String,
  },
  name_ar: {
    type: String,
  },
});

const Trim = mongoose.model("Trim", trim_schema);
export { Trim };
