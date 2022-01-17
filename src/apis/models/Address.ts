import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: String,
    country: String,
    city: String,
    postalCode: String
})

const AddressModel = mongoose.model('Address', addressSchema)

export default AddressModel