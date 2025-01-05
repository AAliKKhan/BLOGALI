

"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageURL: string;
}

const BlogListingPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/data.json'); // Fetch the data.json file from the public folder
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-8">
          All Blogs
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={blog.imageURL}
                alt={blog.title}
                width={300}
                height={80}
                className="h-80 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {blog.content.substring(0,20)}...
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <Link href={`/blog/${blog.id}`} passHref
                  className="block mt-4 text-center px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListingPage;
