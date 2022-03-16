import ProductModel from "../models/Product";

class ProductServices {

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
            ]
        })
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
}

export default ProductServices

// { username: new RegExp('^' + search, 'i') },