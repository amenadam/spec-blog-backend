import Blog from "../models/Blog.js";

export const createPost = async (req, res) => {
  try {
    const { title, discription, imageUrl, category } = req.body;
    if (!title || !discription || !imageUrl) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const newBlog = await Blog.create({
      title,
      content: discription,
      image: imageUrl,
      category,
    });

    res.json({
      success: true,
      message: "Blog created successfully",
      blog: newBlog,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message || "error creating post",
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const blog = await Blog.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message || "error creating post",
    });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.body;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.json({
        success: false,
        message: "Blog not found",
      });
    }

    blog.likes++;
    blog.save();

    res.json({ success: true, message: "blog liked" });
  } catch (error) {
    res.json({
      success: false,
      message: error.message || "Error liking post",
    });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    console.log("");
    const blogs = await Blog.find().sort({ createdAt: -1 });
    if (blogs.length === 0) {
      return res.json({ success: false, message: "No blog found" });
    }
    res.json({ success: true, message: "Posts retrived successfully", blogs });
  } catch (error) {}
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Blog.findById(id);

    if (!post) return res.json({ success: false, message: "Post not found" });

    res.json({ success: true, post });
  } catch (error) {}
};
