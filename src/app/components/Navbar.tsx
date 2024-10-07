"use client"; // This ensures the code is run on the client side

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../ThemeContext'; // Custom hook for theme context

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Access theme context

  // Detect scroll for background color change
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Change threshold as needed
  };

  // Add scroll listener on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed h-[80px] w-full z-10 dark:text-white transition-colors duration-300 ${
        isScrolled ? 'bg-blue-600' : 'bg-transparent'
      } text-white px-6 py-4 dark:bg-gray-900`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold ml-2">Empowerful LLC</span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center">
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="flex flex-col space-y-1">
              <span className="block w-6 h-1 bg-white"></span>
              <span className="block w-6 h-1 bg-white"></span>
              <span className="block w-6 h-1 bg-white"></span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className={`hidden md:flex ml-7 space-x-8`}>
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="ml-4 p-1 rounded-full bg-gray-200 dark:bg-gray-800">
            {theme === 'dark' ? (
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m8-9h1m-17 0H3m15.364-7.364l-.707.707M6.343 17.657l-.707.707M17.657 6.343l-.707.707M6.343 6.343l-.707-.707"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2.25A9.75 9.75 0 1 0 21.75 12A9.75 9.75 0 0 0 12 2.25zM12 1v22"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full h-[90vh] bg-gray-900 z-20 md:hidden">
              <ul className="flex flex-col items-center space-y-4 text-white pt-8">
                <li>
                  <Link href="/" className="hover:underline hover:text-amber-500 font-bold">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline hover:text-amber-300 font-bold">About</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline hover:text-amber-300 font-bold">Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline hover:text-amber-300 font-bold">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
