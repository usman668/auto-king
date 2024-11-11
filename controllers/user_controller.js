import { User } from "../models/user_model.js";
import bcryptjs from "bcryptjs";
import {
  validate_login,
  validate_user,
} from "../utils/validation/user_validation.js";

import jwt from "jsonwebtoken";

// Hash Password.

const secured_password = async (password) => {
  try {
    const hash_password = await bcryptjs.hash(password, 10);
    return hash_password;
  } catch (error) {
    console.log(error.message);
  }
};

// Signup

const Signup = async (req, resp) => {
  try {
    const { error } = validate_user(req.body);
    if (error) {
      return resp.status(400).send({ message: error.details[0].message });
    }
    const existing_user = await User.findOne({ email: req.body.email });
    if (existing_user) {
      return resp.status(400).send({ message: `Email already exists` });
    }
    const hashed_password = await secured_password(req.body.password);
    const user = new User({
      ...req.body,
      password: hashed_password,
    });
    const save_user = await user.save();

    const token = jwt.sign(
      { id: save_user._id, email: save_user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2h" }
    );
    return resp.status(200).send({
      message: `User saved successfully`,
      data: save_user,
      token: token,
    });
  } catch (error) {
    resp.status(400).send(error.message);
  }
};

// Login

const Login = async (req, resp) => {
  try {
    const { error } = validate_login(req.body);
    if (error) {
      return resp.status(400).send({ message: error.details[0].message });
    }
    const { email, password } = req.body;
    const data = await User.findOne({ email: email });
    if (!data) {
      return resp.status(400).send({ message: `Email not found` });
    }
    const is_match = await bcryptjs.compare(password, data.password);
    if (!is_match) {
      return resp.status(400).send({ message: `Invalid Password` });
    }
    const token = jwt.sign(
      { id: data._id, email: data.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2h" }
    );
    return resp.status(200).send({
      message: "Login successful",
      user: data,
      token: token,
    });
  } catch (error) {
    resp.status(400).send(error.message);
  }
};

export { Signup, Login };

/* 
Services.
name image
Cars.
images, title, showroom ariving date, going for fixing date, ready date, services[{service id, cost, service name }],car selling price, actual price, cost of fixing, is auto king car(boolean), dealer ship id, selling status, showroom id
Services. Create update get .
Showroom.
name, location, address, is active, logo

*/