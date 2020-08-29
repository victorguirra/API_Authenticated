const mongoose = require('mongoose');
require('../models/products');
const Products = mongoose.model('Products');

module.exports = {

    async allProducts(req, res){
        const allproducts = await Products.find();

        return res.send({
            allproducts,
            user: req.userId
        });
    },

    async singleProduct(req, res){
        const Product = await Products.findById(req.params.id);

        return res.json(Product);
    },

    async newProduct(req, res){
        const createdProduct = await Products.create( req.body );

        const user = await req.userId;

        return res.send({
            createdProduct,
            user
        });
    },

    async updateProduct(req, res){
        const update = await Products.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new:true }
        )

        return res.json(update);
    },

    async deleteProduct(req, res){
        await Products.findByIdAndRemove(req.params.id);

        res.send(` Product With Id: ${ req.params.id } Successfully Removed `);
    },

    
 }