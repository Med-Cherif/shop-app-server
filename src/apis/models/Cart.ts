import mongoose from "mongoose";

const schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        qty: { type: Number, required: true },
        AddedAt: { type: Date, default: Date.now },
        updatedAt: Date
    }]
})

const CartModel = mongoose.model('Cart', schema);

export default CartModel;