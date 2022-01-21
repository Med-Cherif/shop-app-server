import { Request, Response, NextFunction } from "express";
import { generateAccessToken, generateRefreshToken } from "../helpers/tokens";
import TokenService from "../services/tokenService";
import UserService from "../services/userService";
import UserValidation from "../validation/userValidation";
import { sendEmail } from "../helpers/sendMail";
import { getRedisClient } from "../../db";

// const client = getRedisClient()

class UserController {
    userValidation: UserValidation;
    userService: UserService;
    tokenService: TokenService;
    client: ReturnType<typeof getRedisClient>;
    
    
    constructor() {
        this.userValidation = new UserValidation();
        this.userService = new UserService();
        this.tokenService = new TokenService();
        this.client = getRedisClient();
        this.signup = this.signup.bind(this);
        this.signin = this.signin.bind(this);
        this.signout = this.signout.bind(this);
        this.activeAccount = this.activeAccount.bind(this);
        this.resendActivateAccountLink = this.resendActivateAccountLink.bind(this);
        this.createNewAccessToken = this.createNewAccessToken.bind(this);
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
                
            await this.client.connect()
            await this.client.SETEX(response._id.toString(), 2592000, refreshToken);

            res.status(201).json({
                success: true, accessToken, refreshToken
            })

       } catch (error) {
           console.log(error)
           next({})
       } finally {
           console.log("finally")
            await this.client.disconnect()
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

            await this.client.connect()
            await this.client.SETEX(response._id.toString(), 2592000, refreshToken)

            res.status(200).json({
                success: true, accessToken, refreshToken
            })
        } catch (error) {
            console.log(error)
            next({})
        } finally {
            await this.client.disconnect()
        }
    }

    async signout(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.params;
        try {
            await this.client.connect()
            await this.client.DEL(userId)
            res.sendStatus(204)
        } catch (err) {
            console.log(err)
            next({})
        } finally {
            await this.client.disconnect()
        }
    }

    async activeAccount(req: Request, res: Response, next: NextFunction) {
        const { email, token: confirmationToken } = req.params
        if (!confirmationToken || !email) return next({ statuscode: 404 })
        try {
            const user = await this.userService.getUserByEmail(email);
            if (!user) return next({ statuscode: 404, message: "User not found" })
            if (user.isActive) return next({ statuscode: 409, message: "Your account is already active" })
            const token = await this.tokenService.getToken(confirmationToken, user._id)
            if (!token) return next({ statuscode: 404, message: "Token may expired, resend another one by clicking the resend link button" })
            user.isActive = true
            await user.save();
            await token.delete();
            const accessToken = generateAccessToken(user)          
            const refreshToken = generateRefreshToken(user)
            await this.client.connect()
            await this.client.SETEX(user._id.toString(), 2592000, refreshToken)
            res.status(200).json({
                success: true, accessToken, refreshToken
            })
        } catch (error) {
            next({})
        } finally {
            await this.client.disconnect()
        }
    }

    async resendActivateAccountLink(req: Request, res: Response, next: NextFunction){
        const { email } = req.params;
        if (!email) return next({ statuscode: 404, message: "Email not found" })
        try {
            const userResponse = await this.userService.getUserByEmail(email);
            if (!userResponse) return next({ statuscode: 404, message: "User not found" })
            const tokenResponse = await this.tokenService.createConfirmationToken(userResponse._id);
            await sendEmail(email, tokenResponse.token)
            res.sendStatus(204)
        } catch (error) {
            console.log(error)
            next({})
        }
    }

    async createNewAccessToken(req: Request, res: Response, next: NextFunction) {
        // get data from another middleware
        const { refreshToken, decodedData } = (req as any).user;
        
        try {
            
            await this.client.connect()
            const refreshTokenResult = await this.client.GET(decodedData._id);
            if (!refreshTokenResult || (refreshToken !== refreshTokenResult)) {
                return next({ statuscode: 400 })
            }

            const accessToken = generateAccessToken(decodedData)

            res.status(200).json({
                success: true,
                accessToken,
                refreshToken: refreshTokenResult
            })

            
        } catch (error) {
            console.log(error)
            next({})

        } finally {
            await this.client.disconnect()
        }
    }

}

export default UserController