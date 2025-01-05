
import React from "react";

const NewsletterSubscription = () => {
  return (
    <section className="max-w-7xl mx-auto w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 py-8 sm:py-12 bg-rose-600 text-white border-2 border-red-950 rounded-2xl">
      <div className="text-center px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg mb-6">
          Get the best of BLOGALI delivered straight to your inbox.
        </p>
        
        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-md sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-800"
          />
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-rose-700 rounded-md sm:rounded-r-md hover:bg-rose-800 focus:ring-2 focus:ring-rose-500">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
