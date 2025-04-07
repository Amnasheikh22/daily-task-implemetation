const express = require("express");
const router = express.Router();
const { fetch, updateUser, signup, login, deleteUser,getAllUsers, getUserById, }
 = require("../../controller/userController");

// Define routes

router.post("/signup",signup);
router.post("/login",login);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
module.exports = router;
