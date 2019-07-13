const mongoose = require('mongoose');
const ProvinceSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Province',ProvinceSchema);