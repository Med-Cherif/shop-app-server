import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    socialId: String, // for users who will sign in using facebook, google...
    username: { type: String, required: true, match: /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/i },
    name: { type: String, required: true },
    email: { type: String, required: true, match: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i },
    phoneNumber: String,
    password: { type: String, required: true, minlength: 6 },
    isActive: { type: Boolean, default: false },
    rule: { type: String, enum: ['user', 'admin'], default: 'user' },
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel