'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-[#695441] via-[#C1AA90] to-[#695441] absolute px-4 z-50 top-0 left-0 right-0 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo and Name */}
        <div className="flex items-center space-x-10">
          <div className="w-20 h-20 overflow-hidden rounded-full border-2 border-white shadow-lg transition-transform duration-500 ease-in-out hover:scale-110">
            <img
              src="/images/1.jpg"
              alt="Craftiverse Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-6xl font-bold text-white " style={{ textShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)' }}>
          
            Deskify
          </h1>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 rounded-md focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Right Section: Navbar Links */}
        <ul className={`lg:flex space-x-8 text-white ${menuOpen ? 'flex' : 'hidden'} lg:block`}>
          <li>
            <Link
              href="/"
              className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/posts/blogs"
              className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
