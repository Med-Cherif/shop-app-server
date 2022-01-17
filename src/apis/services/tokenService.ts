import TokenModel from "../models/Token";
import { randomBytes } from "crypto";

class TokenService {


    async createConfirmationToken(userId: string) {
        const randomString = randomBytes(32).toString('hex');
        try {
            const token = await TokenModel.findOne({ user: userId })

            if (token) {
                token.token = randomString
                return await token.save()
            }

            const newToken = new TokenModel({
                user: userId,
                token: randomString,
            })
            return await newToken.save()
        } catch (error) {
            console.log(error)
            throw new Error()
        }
    }

    getToken(token: string, userId: string) {
        return TokenModel.findOne({ token, user: userId })
    }
}

export default TokenService