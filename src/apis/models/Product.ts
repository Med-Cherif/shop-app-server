import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productCode: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: String,
    productType: String,
    categories: { type: Array, default: [] },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, default: 1 },
    image: { type: String, required: true },
    rating: Number,
    specificOptions: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
})

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel







/**
 * 
 */
