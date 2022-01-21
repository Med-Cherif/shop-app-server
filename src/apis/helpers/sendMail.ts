import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";
import {
    ADMIN_GOOGLE_EMAIL,
    ADMIN_GOOGLE_PASSWORD,
    CLIENT_URL,
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_REFRESH_TOKEN 
} from "../../config";

export const sendEmail = (userEmail: string, code: string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: ADMIN_GOOGLE_EMAIL,
            pass: ADMIN_GOOGLE_PASSWORD,
            clientId: OAUTH_CLIENT_ID,
            clientSecret: OAUTH_CLIENT_SECRET,
            refreshToken: OAUTH_REFRESH_TOKEN,
        }
    })
    const mailOptions: MailOptions = {
        from: ADMIN_GOOGLE_EMAIL,
        to: userEmail,
        subject: 'Confirming your email',
        html: `
            <div style="display:flex;justify-content:center;align-items:center">
                <a style="font-size:18px" href="${CLIENT_URL}/confirmation/${userEmail}/${code}">Click here to activate your account in Bibo Shop</a>
            </div>
        `
    }

    return transporter.sendMail(mailOptions)
}