require("dotenv").config();

const express=require ("express");
const mongoose=require ("mongoose");
const authroutes=require("./routes/index");
const app=express();
const {connectDB}=require("./connect/connect");
app.use(express.json());
connectDB()
const multer = require("../blogify-be/config/upload")

app.use("/api/auth",authroutes.user);
app.use("/api",authroutes.blog);

const PORT=process.env.PORT ||5000;
app.listen(PORT,()=>console.log("started"));