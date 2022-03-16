import express from "express";
import ProductController from "../controllers/productController";
import { testRefreshToken } from "../middlewares/private"

const router = express.Router()
const userService = new ProductController()

router.get('/', userService.getProductsWithSearch);
router.get('/get/filter', userService.getProductsWithFilter);
router.get('/:productID', userService.getSingleProduct);
router.post('/', userService.addProduct);
router.post('/multiple', userService.addMultipleProducts);

export default router;