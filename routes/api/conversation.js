const express = require('express');
const router = express.Router();
const Conversation = require('../../models/Conversation');

router.post('/openuser',(req,res)=>{
    Conversation.find({"FirstPerson":req.body.username, "SecondPerson":req.body.recieverusername}).then(co=>{
        if(co.length > 0){
            res.json(co);
        }else{

            Conversation.find({"SecondPerson":req.body.username, "FirstPerson":req.body.recieverusername}).then(convo=>{
                if(convo.length > 0){
                    res.json(convo);
                }else{
                    //sender = req.body.username.split("'");
                    nConvo = new Conversation({
                        FirstPerson:req.body.username,
                        SecondPerson:req.body.recieverusername,
                        LastSender:req.body.username,
                        LastMessage: `**${req.body.username} viewed your profile**`,
                        Seen:false
                    });
                
                    nConvo.save().then((data)=>{
                        res.json(data);
                    }).catch(e=>res.send(e));
                }
            }).catch(e=>res.send(e));

        }
    }).catch(e=>res.send(e));
});

router.get('/:id',(req,res)=>{
    Conversation.find().or([{"FirstPerson":req.params.id},{"SecondPerson":req.params.id}]).then((convos)=>{
        res.json(convos);
        
        

    }).catch(err=>res.send(err));
});



router.put('/:id',(req,res)=>{


    Conversation.findById(req.params.id).then((convo)=>{
        convo.LastMessage=req.body.Text;
        convo.LastSender=req.body.Sender;
        convo.LastModified=Date.now;
        convo.Seen=false;

        convo.save().then((nConvo)=>{
            res.json(nConvo);

        }).catch(e =>{res.json(e)});

    }).catch(err=>res.json(err));


});

router.delete('/:id',(req,res)=>{

    Conversation.findById(req.params.id).then((convo)=>{
        
        convo.delete().then((nConvo)=>{
            res.json(nConvo);

        }).then(e=>res.json(e));

    }).catch(err=>res.json(err));

});

module.exports=router;