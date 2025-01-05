
import React from 'react';
import Image from 'next/image';

const AuthorSpotlight = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <div className="text-center">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-red-400 mb-8">
          Featured Blogger
        </h2>

        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0">
          {/* Author Image */}
          <div className="w-32 sm:w-40 md:w-60">
            <Image
              src="/author.png"
              alt="Author"
              width={240}
              height={240}
              className="rounded-full object-cover shadow-md"
            />
          </div>

          {/* Author Info */}
          <div className="text-center md:text-left max-w-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-red-900">
              Muhammad Ali Adnan
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">
              Author Bio: A brief introduction to the blogger, what they write
              about, and why their posts are worth reading.
            </p>
            <a
              href="/author/[name]"
              className="inline-block text-rose-600 hover:text-rose-800 transition-colors text-sm sm:text-base"
            >
              Explore their posts →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSpotlight;
