const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    nickname:{
        type:String,
        required:true,
    },
    whatsapp:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        select:false,   
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

mongoose.model('Users', UserSchema);