import Post from "../Models/Post.js";
import { createError } from "../utils/createError.js";

export const getPosts = async (req, res) => {};

export const getSinglePost = async (req, res) => {};

export const createPost = async (req, res, next) => {
  try {
    const { title, slug, content, author, date, coverImage } = req.body;

    if (!title || !slug || !content || !author || !date) {
      return next(createError(400, "Required fields missing"));
    }

    const post = await Post.create({
      title,
      slug,
      content,
      author,
      date,
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
    post.date = req.body.author || post.date;
    post.coverImage = req.body.coverImage || post.coverImage;

    const updatedPost = await post.save();

    return res.json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res) => {};
