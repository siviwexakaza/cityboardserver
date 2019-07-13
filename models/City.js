const mongoose = require('mongoose');
const CitySchema = mongoose.Schema({
    province:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('City',CitySchema);