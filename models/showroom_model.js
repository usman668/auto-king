import mongoose from "mongoose";
import { type } from "os";

const location_schema = new mongoose.Schema({
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
});

const showroom_schema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  is_active: {
    type: Boolean,
  },
  logo: {
    type: String,
  },
  location: {
    type: location_schema,
  },
});

const Showroom = mongoose.model("Showroom", showroom_schema);
export { Showroom };
