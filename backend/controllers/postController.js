import Post from "../Models/Post.js";
import { createError } from "../utils/createError.js";

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ date: -1 }); // Newest first

    res.status(200).json({
      message: "Posts fetched successfully",
      count: posts.length,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

export const getSinglePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return next(createError(404, "Post not found!"));
    }

    res.status(200).json({
      message: "Post fetched successfully",
      post,
    });
  } catch (error) {
    next(error);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const { title, slug, content, author, date, coverImage } = req.body;

    if (!title || !slug || !content || !author) {
      return next(createError(400, "Required fields missing"));
    }

    const post = await Post.create({
      title,
      slug,
      content,
      author,
      coverImage,
    });

    return res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return next(createError(404, "Post not found"));
    }

    post.title = req.body.title || post.title;
    post.slug = req.body.slug || post.slug;
    post.content = req.body.content || post.content;
    post.author = req.body.author || post.author;
    // post.date = req.body.author || post.date;
    post.coverImage = req.body.coverImage || post.coverImage;

    const updatedPost = await post.save();

    return res.json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return next(createError(404, "Post not found"));
    }

    await post.deleteOne();
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};
