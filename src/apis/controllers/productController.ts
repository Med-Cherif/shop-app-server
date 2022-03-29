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
    }

    addProduct = async (req: Request, res: Response, next: NextFunction) => {
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

    getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
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

    addMultipleProducts = async (req: Request, res: Response, next: NextFunction) => {
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

    getProducts = async (req: Request, res: Response, next: NextFunction) => {
        const { keyword, type, categories }: any = req.query;

        if ((!keyword && !type) || (keyword && type)) return next({ statuscode: 400 });
        
        try {
            let products;
            if (keyword && (keyword as string).length > 0) {
                products = await this.productServices.getProductsWithSearch(keyword as string);
            }
            else if (type === 'latest') {
                products = await this.productServices.getLatestProducts();
            }
            else if (type === 'similar' && categories) {
                products = await this.productServices.getSimilarProducts(categories)
            }
            
            if (!products) return next({})

            res.status(200).json({
                success: true,
                products
            })
        } catch (error) {
            console.log(error);
            next({})
        }
    }

    getProductsWithFilter = async (req: Request, res: Response, next: NextFunction) => {
        
        const filter = req.query;

        const filterProducts =  handleFilterProduct(filter)

        console.log(filter)
        console.log(filterProducts)

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

    getFeatures = async (req: Request, res: Response, next: NextFunction) => {
        const { category, productType } = req.query;

        if (!category && !productType) return res.sendStatus(200);

        let features: any = {}

        if (!productType && category) {
            const param = {
                categories: { $all: (category as string).split(' ') }
            }
            features = await this.productServices.getFeatures(param);
        }

        if (category && productType) {
            const param = { 
                $or: [
                    { categories: { $all: [category] } },
                    { productType },
                ]
            }
            features = await this.productServices.getFeatures(param);
        }

        res.status(200).json({
            success: true,
            features
        });
    }

    deleteMultipleProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.productServices.deleteMultipleProducts();
            res.sendStatus(204);
        } catch (error) {
            console.log(error);
            next({})
        }
    }

    deleteSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
        const { productID } = req.params;

        if (!productID) return next({ statuscode: 404, message: "Product ID not found" });

        try {
            await this.productServices.deleteSingleProduct(productID);
            res.sendStatus(204);
        } catch (error) {
            next({})
        }
    }
}