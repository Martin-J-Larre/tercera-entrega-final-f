const  mongoose  = require("mongoose");

const OrdersSchema = new mongoose.Schema({

    userMail:{
        type: String
    },
    orderNum:{
        type: String
    },
    products:[{
        productID: Number,
        productName: String,
        quantity: String,
        price: Number,
    }],
    status:{
        type: String
    },
    userID:{
        type: String
    },
    total:{
        type: Number
    },
});

module.exports = mongoose.model('orders', OrdersSchema );