import { config } from "dotenv";
config()
import express from "express";
import cors from "cors";
import user from "./apis/routes/userRoute";
import product from "./apis/routes/productRoute";
import { handleErrors } from "./apis/helpers/errorHandler";
import { connectDB } from "./db";

const app = express();

app.use(express.json())
app.use(cors())

// APIs
app.use(user)
app.use('/api/products', product)

// errors handling
app.use(handleErrors)

const PORT = process.env.PORT || 5000;

;(async function() {
    try {
        await connectDB()
        console.log('db connected')
        app.listen(PORT, () => {
            console.log('Server is lisetning on port', PORT)
        })
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
})()