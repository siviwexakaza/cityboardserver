const mongoose = require('mongoose');
const DriverSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    idnumber:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Driver',DriverSchema);