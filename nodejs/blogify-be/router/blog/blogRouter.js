const express = require("express");
const router = express.Router();
const {getBlogById,getAllBlog,createBlog,updateBlog,deleteBlog} = require("../../controller/blogController");

const authMiddleware= require("../../middleware/auth");
console.log(authMiddleware)
// Define routes

router.post("/create", createBlog);
router.get("/getall", getAllBlog);
router.get("/getallby/:id",getBlogById);
router.put("/update/:id",authMiddleware,updateBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;
