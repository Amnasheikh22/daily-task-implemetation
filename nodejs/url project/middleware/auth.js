const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const auth = (req, res, next) => {
    // Get token from headers
    const token = req.header("Authorization");

    // Check if token is missing
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);

        // Attach user info to request
        req.user = decoded;

        // Move to the next middleware
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired token." });
    }
};

module.exports = {auth};
