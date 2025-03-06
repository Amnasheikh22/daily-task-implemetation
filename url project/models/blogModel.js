const mongoose=require("mongoose");


const blogSchema= new mongoose.Schema({
    title:{
        type:String,required:true,unique:true,
    },
    description:{
        type:String,required:true,
    },
    wordCount:{
        type:Number,required:true,
    },
    mainHeading:{
        type:String,required:true,
    },
    mainExplaination:{
        type:String,required:true,
    },
    subHeading:{
        type:String,required:true,
    },
    subExplaination:{
        type:String,required:true,
    },
    dateCreated:{
        type:Date,required:true,
    }
},{timestamps:true});


    module.exports = mongoose.model("Blog",blogSchema);