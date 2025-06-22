import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axiosInstance from "../../utils/axiosInstance.js";
import NavBar from "../../components/header/NavBar";

export default function WritePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await api.post("/posts", { title, content });
      navigate(`/post/${res.data.post._id}`);
    } catch (err) {
      console.error("Post creation failed", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavBar />

      <main className="px-6 md:px-20 max-w-5xl mx-auto mt-24">
        <h1 className="text-3xl font-bold mb-6">Create a New Post</h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">
          {/* Post Form */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter a catchy title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mb-6 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block font-semibold mb-1">
              Content (Markdown)
            </label>
            <textarea
              placeholder="Write your post in Markdown..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows="16"
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
            />

            <button
              type="submit"
              disabled={submitting}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium"
            >
              {submitting ? "Publishing..." : "Publish Post"}
            </button>
          </div>

          {/* Live Markdown Preview */}
          <div>
            <label className="block font-semibold mb-2">Preview</label>
            <div className="border border-gray-300 rounded p-4 h-[520px] overflow-auto bg-gray-50">
              <ReactMarkdown
                children={content || "*Start typing markdown...*"}
                remarkPlugins={[remarkGfm]}
                className="prose max-w-none prose-sm sm:prose-base"
              />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
