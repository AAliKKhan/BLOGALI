// components/FAQ.tsx
"use client"
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is BLOGALI?",
      answer: "BLOGALI is an online platform where bloggers can share their thoughts, stories, and experiences with a global audience."
    },
    {
      question: "How can I submit my blog post?",
      answer: "You can submit your blog post by clicking on the 'Write for Us' section in the navigation menu. Follow the submission guidelines and our team will review your post."
    },
    {
      question: "How do I subscribe to the newsletter?",
      answer: "You can subscribe to the newsletter by entering your email in the 'Subscribe' section at the bottom of the home page."
    },
    {
      question: "Can I contribute to the blog as a guest author?",
      answer: "Yes, we welcome guest authors. Please reach out to us through the contact form, and we'll provide the guidelines."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl py-12">
      <div className="max-w-7xl mx-auto text-center px-6">
    <h2 className=" font-bold text-4xl text-red-400  mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl font-semibold text-red-900">{item.question}</h3>
                <span className="text-rose-600">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && <p className="mt-4 text-gray-600">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
