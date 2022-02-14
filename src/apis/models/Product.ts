import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productCode: { type: String, required: true },
    description: { type: String },
    type: { type: String }, // like (phone, computer, clothes)
    name: { type: String, required: true },
    specificOptions: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    price: { type: Number, required: true, default: 0 },
    qty: { type: Number, default: 1 },
    image: { type: String },
    categories: { type: Array, default: [] }
})

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel







/**
 * 
 */
