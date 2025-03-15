const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
        try {
            // Get token from headers
            const token = req.header("Authorization");
            if (!token) {
                return res.status(401).json({ message: "Access denied. No token provided." });
            }

            // Verify token
            const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
            req.user = decoded; // Attach user data to request

            // Check if user role is authorized
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({ message: "Forbidden: You do not have permission." });
            }

            next(); // User is authorized, proceed to next middleware
        } catch (error) {
            res.status(403).json({ message: "Invalid or expired token." });
        }
    };

module.exports =auth;
