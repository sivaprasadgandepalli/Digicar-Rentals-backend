const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookSchema=new Schema({
    uname:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    Cnum:{
        type:String,
        require:true
    },
    Fdate:{
        type:String,
        require:true
    },
    Tdate:{
        type:String,
        require:true
    },
    pickTime:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('bookings', BookSchema);