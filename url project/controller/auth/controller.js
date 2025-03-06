const User = require("../../models/url");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { name, password, confirm_password, age, contact, address } =
      req.body;
    if (password !== confirm_password) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    console.log("....");

    const newUser = new User({
      name,
      password,
      contact,
      confirm_password,
      age,
      address,
    });
    await newUser.save();
    console.log("user::", newUser);
    res.status(201).json({
      message: "User registered successfully",
      newUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something happening here", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { contact, password } = req.body;

    const user = await User.findOne({ contact });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user._id, contact: user.contact, role: user.role }, // Payload
      process.env.JWT_SECRET, // Secret Key from .env
      { expiresIn: "1h" } // Token expiry time
    );

    res.status(200).json({ message: "Login successful", user,token });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};

const getAllUsers = async(req,res)=>{
   try{
    const users =await User.find();
    res.status(200).json(users);}
    catch(error){
    res.status(500).json({message:"error fetch",error:error.message});
    }
   };

   const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });

        }

        res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);


        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
};


module.exports = { registerUser,loginUser ,getAllUsers, updateUser, deleteUser };

