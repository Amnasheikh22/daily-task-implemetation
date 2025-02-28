require("dotenv").config();
const express=require ("express");
const mongoose=require ("mongoose");
const authroutes=require("./routes/url");
const app=express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{})
    .then(()=>console.log("mongo conected"))
    .catch((error)=>console.log("not connected",err));

app.use("/api/auth",authroutes);
const PORT=process.env.PORT ||5000;
app.listen(PORT,()=>console.log("started"));