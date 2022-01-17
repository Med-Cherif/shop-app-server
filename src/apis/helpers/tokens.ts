import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../../config";

export const getPayload = (user: any) => {
    return {
        _id: user._id,
        email: user.email,
        name: user.name,
        username: user.username,
        isActive: user.isActive,
        rule: user.rule
    }
}

export const generateAccessToken = (user: any) => {
    const payload = getPayload(user)
    return jwt.sign(payload, ACCESS_TOKEN_SECRET)
}

export const generateRefreshToken = (user: any) => {
    const payload = getPayload(user)
    return jwt.sign(payload, ACCESS_TOKEN_SECRET)
}