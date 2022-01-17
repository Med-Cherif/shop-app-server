import { NextFunction, Request, Response } from "express";
import { verifyAccessToken, verifyRefreshToken } from "../helpers/tokens";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined = req.headers.authorization;
    if (!token || !token.startsWith('Bearer')) {
        return next({ statuscode: 401, message: "You are unauthorized" })
    }
    
    token = token.split(" ")[1];

    try {
        const decodedData = verifyAccessToken(token);
        (req as any).user = decodedData;
        next()
    } catch (error) {
        console.log(error)
        next({})
    }
}

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined = req.headers.authorization;
    if (!token || !token.startsWith('Bearer')) {
        return next({ statuscode: 401, message: "You are unauthorized" })
    }
    
    token = token.split(" ")[1];
    try {
        const decodedData = verifyAccessToken(token);
        if (!decodedData.isAdmin) {
            return next({ statuscode: 403, message: "Only admins are allowed to do this process" })
        }
        (req as any).user = decodedData;
        next()
    } catch (error) {
        console.log(error)
        next({})
    }
}

export const testRefreshToken = (req: Request, res: Response, next: NextFunction) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return next({ statuscode: 404, message: "You are not logged in" })
    try {
        const decodedData = verifyRefreshToken(refreshToken);
        (req as any).user = {
            decodedData,
            refreshToken
        };
        next()
    } catch (error) {
        console.log(error)
        next({})
    }
}