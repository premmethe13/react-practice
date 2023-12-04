const {getProduct,getProductById,getProducts,saveProduct,updateProduct,deleteProduct} = require('../Controller/StationaryController');
const express = require('express');
const routes = express.Router();

routes.get('/',getProducts);
routes.get('/:id',getProductById,getProduct);
routes.post('/add',saveProduct);
routes.put('/update/:id',getProductById,updateProduct);
routes.delete('/delete/:id',getProductById,deleteProduct);

module.exports = routes;