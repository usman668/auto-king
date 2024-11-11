import { Services } from "../models/services_model.js";

// Create Service.

const create_service = async (req, resp) => {
  try {
    const { name } = req.body;
    const service_data = new Services({
      name,
      image: `services/${req.file.path}`,
    });
    const save_data = await service_data.save();
    resp.status(200).send({
      message: `Service saved successfully`,
      data: save_data,
    });
  } catch (error) {
    resp.status(400).send(error.message);
  }
};

export { create_service };
