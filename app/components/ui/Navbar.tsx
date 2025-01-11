"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-main p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="text-white text-2xl font-bold">
          headstarter_gh
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="#home" className="text-black hover:text-white transition">
            Home
          </Link>
          <Link
            href="#about"
            className="text-black hover:text-white transition"
          >
            About
          </Link>
          <Link href="#team" className="text-black hover:text-white transition">
            Team
          </Link>
          <Link
            href="#benefits"
            className="text-black hover:text-white transition"
          >
            Benefits
          </Link>
          <Link
            href="#events"
            className="text-black hover:text-white transition"
          >
            Events
          </Link>
          <Link
            href="#partner"
            className="text-black hover:text-white transition"
          >
            Partner With Us
          </Link>
        </div>

        {/* Join Your Chapter CTA */}
        <div className="hidden md:block ml-8">
          <button className="bg-white text-black px-6 py-3 rounded-full">
            <Link href="https://tally.so/r/m6AAKJ">Join Your Chapter</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} mt-4`}
      >
        <Link
          href="#home"
          className="block text-white py-2 px-4 hover:bg-blue-600"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="block text-white py-2 px-4 hover:bg-blue-600"
        >
          About
        </Link>
        <Link
          href="#team"
          className="block text-white py-2 px-4 hover:bg-blue-600"
        >
          Team
        </Link>
        <Link
          href="#services"
          className="block text-white py-2 px-4 hover:bg-blue-600"
        >
          Benefits
        </Link>
        <Link
          href="#events"
          className="block text-white py-2 px-4 hover:bg-blue-600"
        >
          Events
        </Link>
        <Link
          href="#contact"
          className="block text-white py-2 px-4 hover:bg-blue-600"
        >
          Partner With Us
        </Link>
        <Link
          href="#join"
          className="block  mt-4 bg-white text-black px-6 py-3 rounded-full"
        >
          Join Your Chapter
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
