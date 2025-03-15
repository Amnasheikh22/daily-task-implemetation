require("dotenv").config();

const express =require("express");
const mongoose =require("mongoose");
const app= express();
const route =require("./route/route")
const {connectDB}=require("./connect/connect");

app.use(express.json());
app.use("/api/auth",route);

connectDB();
const PORT=process.env.PORT|| 5000;
app.listen(PORT,()=>console.log("successful"));
