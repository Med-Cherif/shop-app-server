

class ProductValidation {
    
    isValidProduct(data: { [type: string]: any }) {
        let error = null;
        const { name, productType, productCode, price, image } = data;
        if (!name || !productType || !productCode || !price || !image) {
            error = 'Please provide required fields'
        }
        return error
    }
}

export default ProductValidation