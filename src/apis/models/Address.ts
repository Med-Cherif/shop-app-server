import mongoose from "mongoose";

const schema = new mongoose.Schema({
    street: String,
    country: String,
    city: String,
    postalCode: String
})

const AddressModel = mongoose.model('Address', schema)

export default AddressModel