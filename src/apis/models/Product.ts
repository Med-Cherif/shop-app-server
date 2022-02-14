import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productCode: { type: String, required: true },
    description: String ,
    type: String,
    rating: Number,
    name: { type: String, required: true },
    specificOptions: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    price: { type: Number, required: true },
    qty: { type: Number, default: 1 },
    image: String,
    categories: { type: Array, default: [] }
})

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel







/**
 * 
 */
