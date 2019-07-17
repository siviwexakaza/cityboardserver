const express = require('express');
const router = express.Router();
const Province = require('../../models/Province');
const cors = require('cors');
express().use(cors());

router.get('/',(req,res)=>{
    Province.find().then(provinces=>{

        res.json(provinces);

    }).catch(err=>res.send(err));
});

router.post('/',(req,res)=>{
    nProvince = new Province({
        name:req.body.name
    });

    nProvince.save().then(prov=>{
        res.json(prov);
    }).catch(err=>res.send(err));
});

module.exports=router;