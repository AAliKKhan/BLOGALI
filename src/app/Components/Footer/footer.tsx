"use client"; // Marking this as a client component

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-lg font-semibold">
            <span className="text-2xl text-white">BLOGALI</span>
          </div>

          {/* Links Section */}
          <div className="flex space-x-6">
            <a
              href="/About"
              className="text-white hover:text-rose-300 transition-colors"
            >
              About 
            </a>
            <a
              href="/Contact"
              className="text-white hover:text-rose-300 transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-white hover:text-rose-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-white hover:text-rose-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            className="text-white hover:text-rose-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-lg"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-white hover:text-rose-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-white hover:text-rose-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a
            href="https://linkedin.com"
            className="text-white hover:text-rose-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in text-lg"></i>
          </a>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 text-center text-sm text-gray-200">
          <p>&copy; {new Date().getFullYear()} BLOGALI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
