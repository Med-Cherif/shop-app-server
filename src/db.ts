import mongoose from "mongoose";
import { MONGODB_URL } from "./config";

export const connectDB = () => {
    return mongoose.connect(MONGODB_URL)
}