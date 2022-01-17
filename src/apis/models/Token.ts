import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 300 },
})

const TokenModel = mongoose.model('Token', tokenSchema)

export default TokenModel