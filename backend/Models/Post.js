import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
      type: String, // Markdown content
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "Anonymous", // or ref to User if needed
    },
    date: {
      type: Date, // Date on which it was created
      required: true,
    },
    coverImage: {
      type: String, // Image URL
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
