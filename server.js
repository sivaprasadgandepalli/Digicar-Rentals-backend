<<<<<<< HEAD
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


=======
const express=require('express');
const mongoose=require('mongoose');
const port=5000;
const MongoClient = mongoose.MongoClient;
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
app.use(express.json());
app.use(cors());

const login=require('./routers/login');
app.use('/',login);
//password:M9ihCjcIVE06t4Uk
const url =
  "mongodb+srv://20mh1a0483:M9ihCjcIVE06t4Uk@cluster0.fspwj9t.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://20mh1a0483:M9ihCjcIVE06t4Uk@cluster0.fspwj9t.mongodb.net/LoginData"
  );
  console.log("Database is Connected!");
}


>>>>>>> origin/main
app.listen(port,()=>{console.log('server is running at',port)})