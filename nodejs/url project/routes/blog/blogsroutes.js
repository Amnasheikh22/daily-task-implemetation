const express = require("express");
const {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
} = require("../../controller/blogcontroller");

const router = express.Router();

// Routes
router.post("/blog", createBlog);
router.get("/getblog", getAllBlogs);
router.get("/getbyid/:id", getBlogById);
router.put("/put/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;
