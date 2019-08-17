const mongoose = require('mongoose');
const ConversationSchema = mongoose.Schema({
    FirstPerson:{
        type: String,
        required:true
    },
    SecondPerson:{
        type: String,
        required:true
    },
    LastSender:{
        type: String,
        required:true
    },
    LastMessage:{
        type:String,
        required:true
    },
    LastModified:{
        type: Date,
        default:Date.now
    },
    Seen:{
        type:Boolean,
        required:true
    }
    
});

module.exports= mongoose.model('Conversation',ConversationSchema);