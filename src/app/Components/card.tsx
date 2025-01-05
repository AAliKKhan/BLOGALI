


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageURL: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, content, author, date, imageURL }) => {
  return (
    <Link href={`/blog/${id}`} passHref>
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-6 cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-[400px]">
          <Image
            src={imageURL}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-rose-700 mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{content.substring(0, 200)}...</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">By {author}</span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
