


"use client"; // Marking this as a client component
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams for dynamic route parameters
import BlogCarousel from "@/app/Components/blogCarousel"; // Assuming this is the carousel component

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageURL: string;
}

interface Comment {
  id: number;
  text: string;
  date: string;
}

const BlogPostPage: React.FC = () => {
  const params = useParams(); // Using useParams to access route params

  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  useEffect(() => {
    if (params.id) {
      const id = Number(params.id); // Get the id from params
      const fetchBlog = async () => {
        try {
          const response = await fetch("/data.json"); // Assuming data.json is in the `public` folder
          const blogs: Blog[] = await response.json();
          const blogPost = blogs.find((b) => b.id === id);
          setBlog(blogPost || null);
        } catch (error) {
          console.error("Error fetching blog data:", error);
        }
      };

      fetchBlog();
    }
  }, [params.id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment: Comment = {
        id: comments.length + 1,
        text: commentText,
        date: new Date().toLocaleDateString(),
      };
      setComments([newComment, ...comments]);
      setCommentText("");
    } else {
      alert("Please enter a comment.");
    }
  };

  if (!blog) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold text-red-600">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
        {/* Blog Title and Author */}
        <h1 className="text-5xl font-extrabold text-rose-600 mb-6">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          By <span className="font-medium text-gray-800">{blog.author}</span> on {blog.date}
        </p>
        <div className="flex gap-5"><Image
          src={blog.imageURL}
          alt={blog.title}
          width={300}
          height={250}
          className=" object-cover rounded-lg mb-8 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        />

        {/* Blog Content */}
        <p className="text-lg text-gray-800 leading-tight">{blog.content}</p></div>
        {/* Blog Image with Hover Effect */}
        

        {/* Comment Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Comments</h2>

          {/* Display Comments */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-6 bg-gray-50 rounded-lg shadow-lg border-l-4 border-rose-600"
              >
                <p className="text-sm text-gray-500">{comment.date}</p>
                <p className="mt-2 text-gray-700">{comment.text}</p>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700"
              >
                Your Comment
              </label>
              <textarea
                id="comment"
                rows={4}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-50 shadow-sm placeholder-gray-400 transition-all duration-300 ease-in-out"
                placeholder="Enter your comment here..."
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 w-full transition-all duration-300 ease-in-out"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>

      {/* Blog Carousel */}
      <div className="mt-12">
        <BlogCarousel />
      </div>
    </div>
  );
};

export default BlogPostPage;

