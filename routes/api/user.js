const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.post('/login',(req,res)=>{
    User.find({
        "username":req.body.username,
        "password":req.body.password
    }).then((user)=>{
        if(user.length > 0){

            res.json(user);

        }else{
            res.json([{"Error":"Incorrect username/password","Status":"Failed"},{"Action":"Try again"}]);

        }
    }).catch((err)=>{
        res.send(err);
    });
});

router.post('/register',(req,res)=>{

    User.find({
        "username":req.body.username
    }).then((user)=>{
        if(user.length > 0){
            res.json([{"Error":"Incorrect username/password","Status":"Failed"},,{"Action":"Try again"}]);
           

        }else{

            nUser = new User({
                username:req.body.username,
                password:req.body.password
            });

            nUser.save().then(saveduser=>{
                res.json(saveduser);
            }).catch(err=>{
                res.send(err);
            });
        }
    }).catch((err)=>{
        res.send(err);
    })

});
module.exports=router;