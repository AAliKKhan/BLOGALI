"use client"; // Marking this as a client component

import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission logic (e.g., send the data to an API or backend)
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
        {/* Contact Page Title */}
        <h1 className="text-4xl font-extrabold text-rose-600 mb-8">Contact Us</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-50 shadow-sm placeholder-gray-400 transition-all duration-300 ease-in-out"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-50 shadow-sm placeholder-gray-400 transition-all duration-300 ease-in-out"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-50 shadow-sm placeholder-gray-400 transition-all duration-300 ease-in-out"
              placeholder="Enter your message here"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 w-full transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Our Contact Details</h2>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> blogali@gmail.com
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> 034676767
          </p>
          <p className="text-lg text-gray-700">
            <strong>Address:</strong> 1234 Learning Lane, Education City, ABC
          </p>
        </div>

        {/* Map Section (Optional - Embedded Google Map) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
         
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.335570725314!2d-122.0842496846818!3d37.4219997798246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7c1de2e1af3%3A0x4c2e2ec2fd0fadd6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1627496327461!5m2!1sen!2sus"
  width="100%"
  height="450"
  className="rounded-lg shadow-lg"
  style={{ border: 0 }}
  allowFullScreen={true}  // Change this line to `allowFullScreen={true}`
  loading="lazy"
/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
