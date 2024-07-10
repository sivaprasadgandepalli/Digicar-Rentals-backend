const express=require('express');
const mongoose=require('mongoose');
const port=5000;
const MongoClient = mongoose.MongoClient;
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
app.use(express.json());
app.use(cors());
require('dotenv').config();
const login=require('./routers/login');
app.use('/',login);



main().catch((err) => console.log(err));

async function main() {
  const URL=`${process.env.MongoDB_URL}/LoginData`;
  await mongoose.connect(URL);
  console.log("Database is Connected!");
}


app.listen(port,()=>{console.log('server is running at',port)})