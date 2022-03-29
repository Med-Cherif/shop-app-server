import express from "express";
import ProductController from "../controllers/productController";
import { testRefreshToken } from "../middlewares/private"

const router = express.Router()
const productController = new ProductController()

router.get('/', productController.getProducts);
router.get('/filter', productController.getProductsWithFilter);
router.get('/single/:productID', productController.getSingleProduct);
router.get('/features', productController.getFeatures);

router.post('/', productController.addProduct);
router.post('/multiple', productController.addMultipleProducts);

router.delete('/', productController.deleteMultipleProducts)
router.delete('/:productID', productController.deleteSingleProduct)

export default router;