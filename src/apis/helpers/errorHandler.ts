import { NextFunction, Request, Response } from "express";

export const handleErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
    const error = {
        statuscode: 500,
        message: "Something went wrong"
    };

    if (err?.message) {
        error.message = err.message
    }

    if (err?.statuscode) {
        error.statuscode = err.statuscode
    }

    res.status(error.statuscode).json({
        success: false,
        message: error.message
    })
}