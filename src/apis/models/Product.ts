import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    productType: { type: String, required: true },
    productCode: { type: String, required: true, unique: true },
    description: String,
    categories: { type: Array, default: [] },
    price: { type: Number, required: true },
    qty: { type: Number, default: 1 },
    image: { type: String, required: true },
    rating: { type: Number, default: 0},
    features: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
})

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;