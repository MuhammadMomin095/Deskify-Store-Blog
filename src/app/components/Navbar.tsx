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
    <nav className="w-full  absolute px-4 z-50 top-0 left-0 right-0 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo and Name */}
        <div className="flex items-center space-x-10">
        
          <h1 className="text-3xl mt-8 px-6 font-bold text-white " style={{ textShadow: " 4px 4px 10px white" }} >
          
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
        <ul className={`lg:flex space-x-8 mt-8 px-6 text-white ${menuOpen ? 'flex' : 'hidden'} lg:block`}>
          <li>
            <Link
              href="/"
              className="  hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/posts/blogs"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
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
