import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", protect, getPosts);
router.get("/:id", protect, getSinglePost);
router.post("/", protect, createPost);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

export default router;
