const mongoose=require("mongoose");
const CarsInfo=mongoose.Schema({
    Id:{
        type:Number,
        required:true
    },
   Name:{
    type:String,
    required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    FromDate:{
        type:String,
        required:true
    },
    ToDate:{
        type:String ,
        required:true
    },
    Time:{
        type:String ,
        required:true
    },
    price:{
        type:String ,
        required:true
    },
    img:{
        type:String ,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    numberPlate:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('carDetails',CarsInfo);