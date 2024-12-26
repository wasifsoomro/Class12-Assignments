
"use client"
import { useState } from "react";
import Image from "next/image";

// Destructure the Props 
const Header = ({ logoSrc, navigation, buttonText }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#002C5F] py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="Logo"
            width={100}  // Adjust width
            height={100} // Adjust height
            priority
          />
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-white">
            {navigation.map((item: any, index: any) => (
              <li key={index} className="cursor-pointer hover:text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Button */}
        <button className="hidden md:block bg-[#FFEB9C] text-[#002C5F] px-4 py-2 rounded-md hover:bg-yellow-400">
          {buttonText}
        </button>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
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
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#002C5F] flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <ul className="flex flex-col gap-6 text-white text-lg">
            {navigation.map((item: any, index: any) => (
              <li key={index} className="cursor-pointer hover:text-gray-300">
                {item}
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-[#FFEB9C] text-[#002C5F] px-6 py-3 rounded-md hover:bg-yellow-400">
            {buttonText}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
