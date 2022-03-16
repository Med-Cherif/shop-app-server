import { randomBytes } from "crypto";
import { NextFunction, Request, Response } from "express";
import { generateNumber } from "../helpers/generateNumbers";
import ProductServices from "../services/productService";
import ProductValidation from "../validation/productValidation";
import { handleFilterProduct } from "../helpers/handleFilterProducts";

export default class ProductController {

    productValidation: ProductValidation
    productServices: ProductServices

    constructor() {
        this.productValidation = new ProductValidation();
        this.productServices = new ProductServices();
        this.addProduct = this.addProduct.bind(this);
        this.addMultipleProducts = this.addMultipleProducts.bind(this);
        this.getProductsWithSearch = this.getProductsWithSearch.bind(this);
        this.getProductsWithFilter = this.getProductsWithFilter.bind(this);
    }

    async addProduct(req: Request, res: Response, next: NextFunction) {
        const { product } = req.body;
        const error = this.productValidation.isValidProduct(product)
        if (error) return next({ statuscode: 400, message: error });

        try {
            const productResponse = await this.productServices.addProduct(product);
            res.status(201).json({
                success: true,
                product: productResponse
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

    async addMultipleProducts(req: Request, res: Response, next: NextFunction) {
        const { products }: { products: any[] } = req.body;
        
        for (let i = 0; i < products.length; i++) {
            const error = this.productValidation.isValidProduct(products[i]);
            if (error) return next({ statuscode: 400, message: error})
            products[i].rating = generateNumber(3, 5)
            products[i].productCode = randomBytes(8).toString('hex');
        }

        try {
            const productsResponse = await this.productServices.addMultipleProduct(products);
            res.status(201).json({
                success: true,
                products: productsResponse
            })
        } catch (error) {
            console.log(error);
            next({});
        }
    }

    async getProductsWithSearch(req: Request, res: Response, next: NextFunction) {
        const { keyword } = req.query;

        if (!keyword) return res.sendStatus(400);
        
        try {
            const products = await this.productServices.getProductsWithSearch(keyword as string);
            res.status(200).json({
                success: true,
                products
            })
        } catch (error) {
            console.log(error);
            next({})
        }
    }

    async getProductsWithFilter(req: Request, res: Response, next: NextFunction) {
        const filter = req.query;

        const filterProducts =  handleFilterProduct(filter)

        try {
            const products = await this.productServices.getProductsWithFilter(filterProducts)
            res.status(200).json({
                success: true,
                products
            })
        } catch (error) {
            next({})
        }
    
    }
}