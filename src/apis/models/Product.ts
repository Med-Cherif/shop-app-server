import mongoose from "mongoose";
import { randomBytes } from "crypto";
import { generateNumber } from "../helpers/generateNumbers";

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    productType: { type: String, required: true },
    productCode: String,
    description: String,
    categories: { type: Array, default: [] },
    price: { type: Number, required: true },
    qty: { type: Number, default: 1 },
    image: { type: String, required: true },
    rating: Number,
    features: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
})

const ProductModel = mongoose.model('Product', schema);

export default ProductModel;