import mongoose from "mongoose";
const services_schema = new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    }
})
const Services = mongoose.model("Services", services_schema);
export {
    Services
}