const blogmodel = require("../model/blogmodel");
const blogModel = require("../model/blogmodel"); // Import the Article model
const { blog } = require("../router");
// Create a new article
const createBlog = async (req, res) => {
  try {
      const { title, description, heading, author } = req.body;

      if (!title || !description || !heading || !author) {
          return res.status(400).json({ message: "All fields are required!" });
      }

      // ✅ Save the new user
      const newBlog = new blogmodel({ title, description, heading, author });
      await newBlog.save();

      res.status(201).json({ message: "User created successfully", blog: newBlog });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all articles
const getAllBlog = async (req, res) => {
  try {
    const blog = await blogmodel.find();
    res.status(200).json({blog});
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a single article by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await blogmodel.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Article not found!" });
    }
    res.status(200).json({blog});
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update an article by ID
const updateBlog = async (req, res) => {
  try {
    const { title, description, heading, author } = req.body;
    const updatedBlog = await blogmodel.findByIdAndUpdate(
      req.params.id,
      { title, description, heading, author },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Article not found!" });
    }

    res.status(200).json({ message: "Article updated successfully!", blog: updatedBlog});

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete an article by ID
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await blogmodel.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Article not found!" });
    }

    res.status(200).json({ message: "Article deleted successfully!" });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
  

module.exports={createBlog,deleteBlog,updateBlog,getAllBlog,getBlogById};