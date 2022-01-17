import { Request, Response, NextFunction } from "express";
import { generateAccessToken, generateRefreshToken } from "../helpers/tokens";
import TokenService from "../services/tokenService";
import UserService from "../services/userService";
import UserValidation from "../validation/userValidation";
import { sendEmail } from "../helpers/sendMail";
import { randomBytes } from "crypto";
import UserModel from "../models/User";


class UserController {
    userValidation: UserValidation;
    userService: UserService;
    tokenService: TokenService;
    
    constructor() {
        this.userValidation = new UserValidation()
        this.userService = new UserService()
        this.tokenService = new TokenService()
        this.signup = this.signup.bind(this)
        this.signin = this.signin.bind(this)
        this.activeAccount = this.activeAccount.bind(this)
    }

    async signup (req: Request, res: Response, next: NextFunction) {
       const { email, username, password, confirmPassword, name } = req.body;
       if (!email || !username || !password || !confirmPassword || !name) {
            return next({ statuscode: 400, message: "All field are required" })
        }
       this.userValidation.validateUsername(username)
       this.userValidation.validateEmail(email)
       this.userValidation.validateName(name)
       this.userValidation.validatePassword(password, confirmPassword)
       const { error } = this.userValidation
       
       if (Object.keys(error).length > 0) {
            next({ statuscode: 400, message: error })
            return this.userValidation.resetError()
       }
       
       try {   
            const hashedPassword = await this.userValidation.hashPassword(password);
            const response = await this.userService.signup({ email, username, name, password: hashedPassword, confirmPassword });
            if (response?.error) {
                return next(response)
            }
            const tokenResponse = await this.tokenService.createConfirmationToken(response._id);

            sendEmail(response.email, tokenResponse.token)
                .catch((error) => {
                    console.log(error)
                })

            const accessToken = generateAccessToken(response)
            const refreshToken = generateRefreshToken(response)

            res.status(201).json({
                success: true, accessToken, refreshToken
            })

       } catch (error) {
           console.log(error)
           next({})
       }
    }

    async signin (req: Request, res: Response, next: NextFunction) {
        const { preferedField, password } = req.body;
        if (!preferedField || !password) {
            return next({ statuscode: 400, message: "All field are required" })
        }
        try {
            const response = await this.userService.signin({ preferedField, password })
            if (response?.error) {
                return next(response)
            }
            if (!response.isActive) {
                const tokenResponse = await this.tokenService.createConfirmationToken(response._id);
                await sendEmail(response.email, tokenResponse.token)
            }
            const accessToken = generateAccessToken(response)
            const refreshToken = generateRefreshToken(response)

            res.status(200).json({
                success: true, accessToken, refreshToken
            })
        } catch (error) {
            next({})
        }
    }

    async activeAccount(req: Request, res: Response, next: NextFunction) {
        const { email, token: confirmationToken } = req.params
        if (!confirmationToken || !email) return next({ statuscode: 404 })
        try {
            const user = await this.userService.getUserByEmail(email);
            if (!user) return next({ statuscode: 404, message: "User not found" })
            const token = await this.tokenService.getToken(confirmationToken, user._id)
            if (!token) return next({ statuscode: 404, message: "Token may expired, resend another one by clicking the resend link button" })
            user.isActive = true
            await user.save()
            const accessToken = generateAccessToken(user)          
            const refreshToken = generateRefreshToken(user)
            res.status(200).json({
                success: true, accessToken, refreshToken
            })
        } catch (error) {
            next({})
        }
    }

}

export default UserController