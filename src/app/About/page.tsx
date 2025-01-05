
import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* About Section */}
        <h1 className="text-4xl font-bold text-red-600 mb-8">About BLOGALI</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Section - Image */}
          <div className="flex justify-center">
            <Image
              src="/image1.png" // Use your image path here
              alt="Blogali Overview"
              width={500}
              height={500}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section - Text Content */}
          <div className="flex flex-col justify-center space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold text-rose-700">What is BlOGALI?</h2>
            <p>
              BLOGALI is your go-to platform for insightful and engaging content
              on the latest trends in the world of technology. Our focus is on
              Artificial Intelligence, Generative AI, Humanoids, and all things
              tech. We aim to deliver high-quality blogs, tutorials, and insights
              for tech enthusiasts, developers, and innovators alike.
            </p>
            <p>
              Our team consists of passionate individuals who are dedicated to
              providing the most up-to-date and accurate information. From deep
              dives into cutting-edge AI technologies to practical applications,
              Blogali serves as a trusted resource for anyone looking to stay
              ahead in the tech world.
            </p>
            <h2 className="text-2xl font-semibold text-rose-700">Our Mission</h2>
            <p>
              At BLOGALI, our mission is to foster learning and curiosity
              surrounding the ever-evolving field of Artificial Intelligence and
              technology. Through our well-researched blogs and tutorials, we
              aim to create a community where users can expand their knowledge and
              share ideas.
            </p>
            <p>
              Whether you&apos;re a beginner or an expert, we aim to make complex
              topics more accessible and relatable to everyone.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Features of BLOGALI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cutting-edge Content</h3>
              <p>Stay updated with the latest trends in Artificial Intelligence, Humanoids, and Generative AI.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Writers</h3>
              <p>Our content is written by tech experts and AI enthusiasts with in-depth knowledge of the subject.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Community</h3>
              <p>Engage with a vibrant community of like-minded tech enthusiasts and developers.</p>
            </div>
          </div>
        </div>

       {/* Frequently Asked Questions Section */}
       <div className=" p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Most Common Questions</h2>
          <div className="space-y-6">
            <div className="border-b-2 pb-4">
              <h3 className="text-xl font-semibold text-gray-800">What is BLOGALI about?</h3>
              <p className="text-gray-700">Blogali is a platform dedicated to providing high-quality blogs and tutorials on the latest AI technologies, including Generative AI, Humanoids, and more.</p>
            </div>
            <div className="border-b-2 pb-4">
              <h3 className="text-xl font-semibold text-gray-800">Who writes the blogs on BLOGALI?</h3>
              <p className="text-gray-700">Our blogs are written by experts and passionate individuals who are deeply involved in the tech and AI community.</p>
            </div>
            <div className="border-b-2 pb-4">
              <h3 className="text-xl font-semibold text-gray-800">Can I contribute to BLOGALI?</h3>
              <p className="text-gray-700">Yes! We encourage writers, developers, and AI enthusiasts to contribute their insights. Please get in touch through our contact page.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">How often are new blogs posted?</h3>
              <p className="text-gray-700">We post new blogs on a regular basis, typically once or twice a week. Make sure to subscribe to our newsletter for the latest updates.</p>
            </div>
          </div>
          </div>
        
      </div>
    </div>
  );
};

export default AboutPage;
