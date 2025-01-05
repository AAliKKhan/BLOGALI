"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-r shadow-lg bg-background/50 sticky   top-0 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src="/L1.png" alt="Logo" width={180} height={80} className="rounded-md" />
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-red-900 font-bold">
          <Link href="/" className="hover:text-red-500 transition duration-300 font-semibold">
            Home
          </Link>
          <Link href="/Logs" className="hover:text-red-500 transition duration-300 font-semibold">
            Blogs
          </Link>
          <Link href="/About" className="hover:text-red-500 transition duration-300 font-semibold">
            About
          </Link>
          <Link href="/Contact" className="hover:text-red-500 transition duration-300 font-semibold">
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-red-500 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <nav className="md:hidden  bg-background/50 backdrop-blur shadow-lg ">
          <ul className="flex flex-col space-y-2 p-4  font-bold text-red-900 ">
            <li>
              <Link
                href="/"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Logs"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
