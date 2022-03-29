export const handleFilterProduct = (filter: { [field: string]: any }) => {
    const { category, productType, minprice, maxprice, ...rest } = filter;

    let data: { [field: string]: any } = {};

    if (category && category !== 'all') {
        data.categories = { $all: category.split(' ') };
    }

    if (productType && productType !== 'all') {
        data.productType = productType
    }

    if (minprice) {
        if (!data.price) {
            data.price = { $lte: parseFloat(maxprice) };
        } else {
            data.price.$lte = parseFloat(maxprice);
        }
    }

    if (maxprice) {
        if (!data.price) {
            data.price = { $gte: parseFloat(minprice) };
        } else {
            data.price.$gte = parseFloat(minprice);
        }
    }

    /**
     * rest = {
     *  color: x,
     *  size: y
     * }
     */

    return data;

}