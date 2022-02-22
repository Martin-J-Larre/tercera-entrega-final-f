const  mongoose  = require("mongoose");

const ProductsSchema = new mongoose.Schema({

    name:{
        type: String
    },
    description:{
        type: String
    },
    price:{
        type: Number
    },
    img:{
        type: String
    },
    category:{
        type: String
    },
    stock:{
        type: String
    },
});

module.exports = mongoose.model('products', ProductsSchema );