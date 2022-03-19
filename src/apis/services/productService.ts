import ProductModel from "../models/Product";

class ProductServices {

    getLatestProducts() {
        return ProductModel.find({}).sort({ createdAt: -1 }).select('_id image name price rating').limit(8);
    }

    getProductsWithSearch(keyword: string) {
        const regexWord = new RegExp(keyword, 'i')
        let words = keyword.split(' ');
        let regexArray: RegExp[] = []

        for (let i = 0; i < words.length; i++) {
            regexArray.push(new RegExp(words[i], 'i'))
        }
        
        
        return ProductModel.find({
            $or: [
                { name: regexWord },
                { description: regexWord },
                { categories: { $all: regexArray } },
                { 'features.brand': regexWord },
                { 'features.model': regexWord },
            ]
        })
    }

    getSimilarProducts(categories: string[]) {
        return ProductModel.find({ categories: { $all: categories } })
    }

    getProductsWithFilter(filter: any) {
        return ProductModel.find(filter);
    }

    addProduct(product: { [field: string]: any }) {
        return ProductModel.create(product);
    }

    getSingleProduct(productID: string) {
        return ProductModel.findById(productID);
    }

    addMultipleProduct(products: any[]) {
        return ProductModel.insertMany(products)
    }

    deleteSingleProduct(productID: string) {
        return ProductModel.findByIdAndDelete(productID);
    }

    deleteMultipleProducts(query: any = {}) {
        return ProductModel.deleteMany(query);
    }
}

export default ProductServices