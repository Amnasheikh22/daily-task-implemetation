const mongoose=require ("mongoose");

require("dotenv").config();

const connectDB= async()=>{
    mongoose.connect(process.env.MONGO_URI,{})
    .then(()=>console.log("mongo conected"))
    .catch((error)=>console.log("not connected",err));

}

module.exports={connectDB};