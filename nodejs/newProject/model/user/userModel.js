const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },    
}, {
    timestamp:true
})

module.exports = mongoose.model("User", userSchema)