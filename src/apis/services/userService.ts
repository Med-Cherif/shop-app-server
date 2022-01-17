import UserModel from "../models/User"
import UserValidation from "../validation/userValidation";

class UserService {
    userValidation: UserValidation;

    constructor() {
        this.userValidation = new UserValidation()
        
    }

    async signup(data: any) {
        try {
            let user = await UserModel.findOne({ email: data.email });
            if (user) {
                return {
                    error: true,
                    statuscode: 409,
                    message: "Email exixts"
                }
            }

            user = await UserModel.findOne({ username: data.username });

            if (user) {
                return {
                    error: true,
                    statuscode: 409,
                    message: "Username exixts"
                }
            }

            user = new UserModel(data)

            return await user.save()
            

        } catch (error) {
            console.log(error)
            throw new Error()
        }
    }

    async signin(data: any) {
        try {
            const user = await UserModel.findOne().or([
                { username: data.preferedField },
                { email: data.preferedField }
            ])
            if (!user || !(await this.userValidation.comparePassword(data.password, user.password))) {
                return {
                    error: true,
                    statuscode: 404,
                    message: "Invalid credentials"
                }
            }
            return user
        } catch (error) {
            return {
                error: true,
            }
        }
    }

    getUserByEmail(email: string) {
        return UserModel.findOne({ email })
    }
}

export default UserService