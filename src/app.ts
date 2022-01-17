import { config } from "dotenv";
config()
import express from "express";
import cors from "cors";
import user from "./apis/routes/userRoute";
import { handleErrors } from "./apis/helpers/errorHandler";
import { connectDB } from "./db";

const app = express();

app.use(express.json())
app.use(cors())

// APIs
app.use(user)

// errors handling
app.use(handleErrors)

const PORT = process.env.PORT || 5000;

;(async function() {
    try {
        await connectDB()
        console.log('DB connected')
        app.listen(PORT, () => {
            console.log('Server is lisetning on port', PORT)
        })
        
    } catch (error) {
        process.exit(1)
    }
})()