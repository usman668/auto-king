import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", user_schema);
export { User };
