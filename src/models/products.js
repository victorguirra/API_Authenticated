const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    numberContact:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    urlImage:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

mongoose.model('Products', ProductSchema);