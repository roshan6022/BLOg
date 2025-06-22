import React from "react";
import NavBar from "../../components/header/NavBar";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="mt-24 px-6 md:px-20 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Discover, Write, Inspire.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Welcome to Whispwrite — your space to explore thoughts, express
            ideas, and find your next favorite blog.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="mt-16 px-6 md:px-20 max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side — Recent Posts */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>

          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl  hover:shadow-md transition"
              >
                {/* <Link to={`/post/${post._id}`}>
                  <h2 className="text-xl font-bold mb-2 hover:underline">
                    {post.title}
                  </h2>
                </Link> */}

                <h3 className="text-xl font-semibold mb-2">
                  Sample Blog Title #{i + 1}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, necessitatibus!
                </p>
                <div className="text-sm text-gray-500">
                  By Roshan • June 20, 2025
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 mt-20 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Whispwrite. Crafted with love by Roshan.
      </footer>
    </div>
  );
}
