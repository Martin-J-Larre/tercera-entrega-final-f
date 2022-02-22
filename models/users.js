const  mongoose  = require("mongoose");

const UserSchema = new mongoose.Schema({

    username:{
        type: String
    },
    password:{
        type: String
    },
    name:{
        type: String
    },
    address:{
        type: String
    },
    phone:{
        type: String
    },
    admin:{
        type: String
    },
});

module.exports = mongoose.model('users', UserSchema );