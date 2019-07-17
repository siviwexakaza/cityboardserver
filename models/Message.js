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
    },
    username:{
        type:String,
        required:false
    }
});

module.exports = mongoose.model('Message',MessageSchema);