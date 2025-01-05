
"use client";
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import BlogCard from './card';

// Define the type for blog data
interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageURL: string;
}

const BlogCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<Blog[]>([]); // Use the Blog type for the state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Assuming the data.json file is in the public folder
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Blog[] = await response.json(); // Use Blog[] type for fetched data
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 mt-[100px]">
        <div className="flex gap-4 mb-[30px]">
          <div className="w-[20px] h-[40px] bg-red-600"></div>
          <h1 className="font-bold text-2xl text-red-400">New Uploads</h1>
        </div>

        {/* Scrollable carousel with buttons */}
        <div className="relative">
          {/* Left Scroll Button - Hidden on small screens */}
          <button
            className="hidden sm:block absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 hover:scale-110 transition duration-300 z-10"
            onClick={scrollLeft}
            aria-label="Scroll Left"
          >
            &#8592;
          </button>

          {/* Carousel Content */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar"
          >
            {data.slice(0, 6).map((blog) => (
              <div
                key={blog.id}
                className="min-w-[250px] sm:min-w-[300px] lg:min-w-[400px] flex-shrink-0"
              >
                <BlogCard
                  id={blog.id}
                  title={blog.title}
                  content={blog.content}
                  author={blog.author}
                  date={blog.date}
                  imageURL={blog.imageURL}
                />
              </div>
            ))}
          </div>

          {/* Right Scroll Button - Hidden on small screens */}
          <button
            className="hidden sm:block absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 hover:scale-110 transition duration-300 z-10"
            onClick={scrollRight}
            aria-label="Scroll Right"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* "Show More" link */}
      <div className="max-w-7xl mx-auto p-6 flex justify-end">
        <Link
          href="/Blog"
          className="inline-block px-6 py-2 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 ease-in-out"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default BlogCarousel;
