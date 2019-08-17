const mongoose = require('mongoose');
const ChatSchema = mongoose.Schema({
    ConversationID:{
        type: String,
        required:true
    },
    Text:{
        type:String,
        required:true
    },
    Sender:{
        type: String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Chat',ChatSchema);