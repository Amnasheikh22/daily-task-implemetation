const mongoose= require("mongoose");
 const blogifySchema = new mongoose.Schema({
      title:{
        type:String,
        required:true
      },
      heading:{
        type:String,
        required:true
      },

      description:{
        type:String,
        required:true
      },
      author:{
        type:String,
        required:true
      },


 });
 module.exports= mongoose.model("blogify",blogifySchema)