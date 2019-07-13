const mongoose = require('mongoose');
const MessageSchema = mongoose.Schema({
    city:{ //City name
        type: String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    day:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Message',MessageSchema);