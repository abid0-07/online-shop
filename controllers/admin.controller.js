function getPorducts(req, res){
    res.render('admin/products/all-products');
}

function getNewProducts(req,res){
    res.render('admin/products/new-products');
}

function createNewProduct(){}


module.exports = {
    getProducts: getPorducts,
    getNewProducts: getNewProducts,
    createNewProduct: createNewProduct
}