const mongoose=require("mongoose");
const bcrypt = require ("bcryptjs");

const userSchema= new mongoose.Schema({
   name:{type:String,
    required:true,
   },
   password:{type:String,
    required:true,
   },
   confirm_password:{type:String,
    required:true,
   },
   contact:{
    type:String,
    required:true
   },
   address:{type:String,
    required:true,
   },
   age:{type:Number,
    required:true,
   },
});


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.confirm_password = await bcrypt.hash(this.confirm_password, salt);
    next();
});

module.exports = mongoose.model("User", userSchema);