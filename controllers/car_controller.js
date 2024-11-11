import { Car } from "../models/car_model.js";

// Create a car api.

const new_car = async (req, resp) => {
  try {
    const images =
      req.files?.images?.length > 0
        ? req.files?.images?.map((file) => `cars/${file.originalname}`)
        : [];
        const accident_images =
      req.files?.accident_images?.length > 0
        ? req.files?.accident_images?.map((file) => `cars/${file.originalname}`)
        : [];

    req.body.images = images;
    req.body.accident_images = accident_images;

    const data = new Car(req.body);
    const save_data = await data.save();
    resp
      .status(200)
      .send({ message: `Data saved successfully`, data: save_data });
  } catch (error) {
    resp.status(400).send(error.message);
  }
};

export { new_car };
