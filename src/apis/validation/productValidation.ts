class ProductValidation {
    
    isValidProduct(data: { [type: string]: any }) {
        let error: { [field: string]: string } = {};
        const { name, productType, price, image } = data;
        if (!name) {
            error.name = 'Please provide a product name'
        }
        if (!productType) {
            error.productType = 'Please provide a product type ex(phone, t-shirt, headphones...)'
        }

        if (!price) {
            error.price = 'Please provide a product price'
        }

        if (!image) {
            error.image = 'Please provide a product image'
        }

        if (Object.values(error).length > 0) {
            return error;
        }

        return null
    }
}

export default ProductValidation