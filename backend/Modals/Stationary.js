const mongoose = require('mongoose');

const Schema = mongoose.Schema

const StationaryProduct = new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    rating:{
        type:Number
    },
    price:{
        type:Number
    }
});

module.exports = mongoose.model('Stationary Product',StationaryProduct);