<<<<<<< HEAD
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const loginSchema = new Schema({
    uname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    pwd:{
        type:String,
        require:true
    }
})


=======
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const loginSchema = new Schema({
    uname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    pwd:{
        type:String,
        require:true
    }
})


>>>>>>> origin/main
module.exports = mongoose.model('logindet', loginSchema)