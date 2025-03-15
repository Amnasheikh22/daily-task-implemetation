const express= require("express");
const controller =require ("../controller/auth/controller");
const auth=require("../middleware/middleware")
const router=express.Router();


router.post("/register", controller.registerUser);
router.post("/login",controller.loginUser);
router.get("/users",auth,controller.getAllUsers); 
router.put("/update/:id", controller.updateUser); 
router.delete("/delete/:id",controller.deleteUser); 

module.exports=router; 
