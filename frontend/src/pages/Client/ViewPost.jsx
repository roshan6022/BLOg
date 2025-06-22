import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axiosInstance from "../../utils/axiosInstance";
import NavBar from "../../components/header/NavBar";

export default function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/posts/${id}`)
      .then((res) => {
        setPost(res.data.post);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch post", err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <NavBar />

      <main className="px-6 md:px-20 max-w-3xl mx-auto mt-24">
        {loading && (
          <div className="text-center text-gray-500">Loading post...</div>
        )}

        {!loading && post && (
          <>
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <div className="text-sm text-gray-500 mb-8">
              By {post.author?.name || "Unknown"} •{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </div>

            <article className="prose max-w-none prose-sm sm:prose-base">
              <ReactMarkdown
                children={post.content}
                remarkPlugins={[remarkGfm]}
              />
            </article>

            <div className="mt-10">
              <Link
                to="/home"
                className="inline-block text-blue-600 hover:underline text-sm"
              >
                ← Back to Home
              </Link>
            </div>
          </>
        )}

        {!loading && !post && (
          <div className="text-center text-red-500 mt-10">Post not found.</div>
        )}
      </main>

      <footer className="text-center py-6 mt-20 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Whispwrite. Crafted by Roshan.
      </footer>
    </div>
  );
}
