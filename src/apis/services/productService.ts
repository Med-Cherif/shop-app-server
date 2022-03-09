import ProductModel from "../models/Product";

class ProductServices {

    addProduct(data: { [field: string]: any }) {
        return ProductModel.create(data);
    }

    getSingleProduct(productID: string) {
        return ProductModel.findById(productID);
    }
}

export default ProductServices