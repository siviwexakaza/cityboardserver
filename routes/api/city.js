const express = require('express');
const router = express.Router();
const City = require('../../models/City');

router.get('/',(req,res)=>{
    City.find().then(cities=>{
        res.json(cities);
    }).catch(err=>res.send(err))
});

router.get('/:id',(req,res)=>{
    City.find({
        "province":req.params.id
    }).then(cities=>{
        res.json(cities);
    }).catch(err=>res.send(err));
});

router.post('/',(req,res)=>{
    nCity = new City({
        province: req.body.province,
        name: req.body.name
    });

    nCity.save().then(city => res.json(city)).catch(err=> res.send(err));
});

module.exports=router;