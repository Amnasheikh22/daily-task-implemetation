const express = require("express")
const cors =require("cors")
const mongoose=require("mongoose")
require("dotenv").config()
const route= require("./router/index")
const multer=require("multer");
const router = express.Router(); 

const app=express();
app.use(express.json());
app.use("/api/blog",route.blog);
app.use("/api/user",route.user);



const PORT=process.env.PORT;
MONGO_URI=process.env.MONGO_URI;
const {connectDB}=require("./db/connect");

connectDB();

 app.listen(PORT,()=>{     
    console.log("server is started",PORT)
});




