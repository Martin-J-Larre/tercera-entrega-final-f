const  mongoose  = require("mongoose");

const cartSchema = new mongoose.Schema({

    userMail:{
        type: String
    },
    userID:{
        type: String
    },
    products:[{
        productID: Number,
        productName: String,
        quantity: String,
        price: Number,
    }],
    address:{
        type: String
    },
    timestamp:{
        type: String
    },
    total:{
        type: Number
    },
});

module.exports = mongoose.model('orders', cartSchema );