import mongoose from "mongoose";
import { createClient, RedisClientType, RedisScripts } from "redis"
import { MONGODB_URL } from "./config";

export const connectDB = () => {
    return mongoose.connect(MONGODB_URL)
}

export const getRedisClient = () => {
    const client = createClient()
    return client
}