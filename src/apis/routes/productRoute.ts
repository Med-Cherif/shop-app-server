import express from "express";
import ProductController from "../controllers/productController";
import { testRefreshToken } from "../middlewares/private"

const router = express.Router()
const userService = new ProductController()

router.post('/', userService.addProduct);
router.get('/:productID', userService.getSingleProduct);

export default router;