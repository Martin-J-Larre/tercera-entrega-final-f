const  mongoose  = require("mongoose");

const MessagesSchema = new mongoose.Schema({

    userMail:{
        type: String
    },
    tipo:{
        type: String
    },
    timestamp: {
        type: String
    },
    messages: {
        type: String
    }
});

module.exports = mongoose.model('messages', MessagesSchema );