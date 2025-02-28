const User = require("../../models/url");
const bcrypt= require("bcryptjs");

const registerUser= async(req,res)=>{
    try {
        console.log("req.body",req.body)
        const { name, password, confirm_password, age, contact, address } = req.body;
        if (password !== confirm_password) {
            return res.status(400).json({ message: "Passwords do not match" });
        };
        console.log("....")
const newUser = new User({name,password,contact,confirm_password,age,address});
await newUser.save();
console.log("user::",newUser)
res.status(201).json({ 
    message: "User registered successfully",
newUser
 });
    }
    catch (error) {
    res.status(500).json({ message:"something happening here",error: error.message });
}
}

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

        res.status(200).json({ message: "Login successful", user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser, loginUser }
