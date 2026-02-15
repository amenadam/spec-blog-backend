import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  likePost,
} from "../controllers/blog.js";
import { verifyToken } from "../middleware/auth.js";

const blogRoutes = express.Router();

blogRoutes.post("/create", createPost);
blogRoutes.post("/delete/:id", deletePost);
blogRoutes.post("/like", likePost);

blogRoutes.get("/all", getAllPosts);
blogRoutes.get("/:id", getPost);

export default blogRoutes;
