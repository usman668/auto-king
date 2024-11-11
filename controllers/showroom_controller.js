import { Showroom } from "../models/showroom_model.js";

// Create Showroom api

const new_showroom = async (req, resp) => {
try {
    const {name, location, is_active, address} = req.body;
    const data = new Showroom({
        name,
        is_active,
        location,
        address,
        logo:`showroom/${req.file.originalname}`
    })
    const save_data = await data.save();
    resp.status(200).send({message:"Showroom saved successfully", data:data})
} catch (error) {
   resp.status(400).send(error.message) 
}
}

export { new_showroom }