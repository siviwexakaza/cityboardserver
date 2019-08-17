const express = require('express');
const router = express.Router();
const Driver = require('../../models/Driver');



router.get('/',(req,res)=>{
    Driver.find().then(d=>{
        res.json(d);
    }).catch(err=>res.send(err))
});



router.post('/',(req,res)=>{

    nDriver = new Driver({
        name: req.body.name,
        surname: req.body.surname,
        idnumber: req.body.idnumber,
        phonenumber: req.body.phonenumber,
        email: req.body.email
    });

    nDriver.save().then(driver => res.json(driver)).catch(err=> res.send(err));
    

    //nCity.save().then(city => res.json(city)).catch(err=> res.send(err));
});

module.exports=router;