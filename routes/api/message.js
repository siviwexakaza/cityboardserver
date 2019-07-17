const express = require('express');
const router = express.Router();
const Message = require('../../models/Message');

router.get('/',(req,res)=>{
    Message.find().then((messages)=>{
        res.json(messages);
    }).catch(err => console.log(err));
});

router.get('/:id',(req,res)=>{

    Message.find({
        "city": req.params.id
    }).then((messages)=>{
        res.json(messages);
    }).catch(err=>console.log(err));

});

router.post('/',(req,res)=>{
    nMessage = new Message({
        city: req.body.city,
        content: req.body.content,
        username:req.body.username
    });

    nMessage.save().then((m)=>{res.json(m)}).catch(e=>console.log(e));
});

module.exports=router;