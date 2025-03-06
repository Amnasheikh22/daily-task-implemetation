const express= require("express");
const {auth}=require("../../middleware/auth")
// const {registerUser ,loginUser,getAllUsers, updateUser, deleteUser }= require ("../controller/auth/controller");
const controller=require ("../../controller/auth/controller");

const router=express.Router();

router.post("/register", controller.registerUser);
router.post("/login",controller.loginUser);
router.get("/users",auth,controller.getAllUsers); 
router.put("/update/:id", controller.updateUser); 
router.delete("/delete/:id",controller.deleteUser); 

module.exports=router; 