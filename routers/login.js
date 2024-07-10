const express = require('express')
const router = express.Router();
const logins = require('../models/login');
const bookCar = require('../models/bookCar');
const monk = require('monk')
var db = monk("mongodb+srv://20mh1a0483:M9ihCjcIVE06t4Uk@cluster0.fspwj9t.mongodb.net/LoginData")
router.get('/', (req, res) => {
    res.send('getting request');
})
//posting login data
router.post('/postUser', async (req, res) => {
    try {
        const user = new logins({
            uname: req.body.uname,
            email: req.body.email,
            pwd: req.body.pwd
        })
        await user.save();
        console.log(user);
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})
//getting login data
const logindata = db.get('logindets');
router.get('/userData', function (req, res) {
  logindata.find({}, function (err, docs) {
    if (err) {
      res.send(err)
    }
    else {
      console.log("login data fetched")
      res.send(docs)
    }
  })
})
//posting booking data
router.post('/bookCar',async(req,res)=>{
  try {
    const order=new bookCar({
      uname:req.body.uname,
      phone:req.body.phone,
      Cnum:req.body.Cnum,
      Fdate:req.body.Fdate,
      Tdate:req.body.Tdate,
      pickTime:req.body.pickTime,
      price:req.body.price
    })
    await order.save();
    console.log("booking data posted");
    res.status(200).json(order)
  } catch (error) {
    console.log(error);
  }
})
//getting booking data
const bookingData=db.get('bookings');
router.get('/getBookingData',function(req,res){
  bookingData.find({},(err,docs)=>{
    if(err){
      res.send(err);
    }
    else{
      res.send(docs);
    }
  })
})
router.post('/myRecords', async (req, res) => {
  try {
    const { uname } = req.body;
    const records = bookingData.find({ uname }, (err, docs) => {
      if (!docs) {
        res.status(401).json("no data found");
      }
      else {
        res.status(200).json(docs)
      }
    });
    console.log(req.body);
  } catch (error) {
    console.log(error)
  }

})
module.exports = router;

