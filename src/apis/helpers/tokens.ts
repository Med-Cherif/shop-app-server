import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../../config";

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
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
        expiresIn: 900
    })
}

export const generateRefreshToken = (user: any) => {
    const payload = getPayload(user)
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
        expiresIn: 2592000 // 30 days
    })
}

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, ACCESS_TOKEN_SECRET)
}

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, REFRESH_TOKEN_SECRET)
}