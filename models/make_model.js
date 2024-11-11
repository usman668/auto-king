import mongoose from "mongoose";

const make_schema = new mongoose.Schema({
  name_en: {
    type: String,
  },
  name_ar: {
    type: String,
  },
});

const Make = mongoose.model("Make", make_schema);
export { Make };
