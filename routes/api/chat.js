const express = require('express');
const router = express.Router();
const Chat = require('../../models/Chat');
const Conversation = require('../../models/Conversation');


//Opening chat by clicking name

router.put('/:id',(req,res)=>{
    Chat.find({
        "ConversationID":req.params.id
    }).then((chats)=>{
        res.json(chats);

        Conversation.findById(req.params.id).then(convo=>{

            if(req.body.Sender != convo.LastSender){
                convo.Seen =true;
                convo.save();
            }

        });

    }).catch(err=>res.send(err));
});


router.post('/:id',(req,res)=>{
    nChat = new Chat({
        ConversationID:req.params.id,
        Text:req.body.Text,
        Sender:req.body.Sender
    });

    nChat.save().then((chat)=>{

        res.json(chat);

    }).catch(err=>res.json(err));
});

module.exports=router;