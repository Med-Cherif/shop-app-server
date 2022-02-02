import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productCode: { type: String, required: true },
    description: { type: mongoose.Schema.Types.Mixed, default: {} },
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    qty: { type: Number, default: 1 },
    image: { type: String },
    categories: { type: Array, default: [], enum: [
        'phones',
        'phones & computers accessoires',
        'computers',
        'women clothes',
        'man clothes',
        'fashion',
        'cosmetics & beauty'
    ]}
})

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel







/**
 * 
 */