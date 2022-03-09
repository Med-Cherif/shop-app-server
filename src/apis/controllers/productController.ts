import { NextFunction, Request, Response } from "express";
import ProductServices from "../services/productService";
import ProductValidation from "../validation/productValidation";

export default class ProductController {

    productValidation: ProductValidation
    productServices: ProductServices

    constructor() {
        this.productValidation = new ProductValidation();
        this.productServices = new ProductServices();
        this.addProduct = this.addProduct.bind(this);
    }

    async addProduct(req: Request, res: Response, next: NextFunction) {
        const data = req.body;
        const error = this.productValidation.isValidProduct(data)
        if (error) return next({ statuscode: 400, message: error });

        try {
            const product = await this.productServices.addProduct(data);
            res.status(201).json({
                success: true,
                product
            })
        } catch (error) {
            console.log(error);
            next({})
        }
    }

    async getSingleProduct(req: Request, res: Response, next: NextFunction) {
        const { productID } = req.params;
        if (!productID) return next({ statuscode: 400, message: "Product ID is Not provided" });

        try {
            const product = await this.productServices.getSingleProduct(productID);
            if (!product) return next({ statuscode: 404, message: 'Product not found' });

            res.status(200).json({
                success: true,
                product
            })

        } catch (error) {
            console.log(error);
            next({})
        }
    }
}