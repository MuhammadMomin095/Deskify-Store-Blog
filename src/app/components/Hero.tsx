"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Cart', path: '/cart' },
  { name: 'Products', path: '/products' },
  { name: 'Blogs', path: '/posts/blogs' },
];;

type NavbarProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
};



const HeroSection: React.FC<NavbarProps> = ({ menuOpen, toggleMenu }) => {
  useEffect(() => {
    const heading = document.querySelector('.word');
    const text = heading?.textContent;
    if (heading && text) {
      heading.innerHTML = '';
      const words = text.split(' ');

      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('word-span');
        wordSpan.style.animationDelay = `${index * 0.5}s`;

        word.split('').forEach((letter, letterIndex) => {
          const letterSpan = document.createElement('span');
          letterSpan.classList.add('letter', 'animate-fadeInLetter');
          letterSpan.style.animationDelay = `${index * 0.5 + letterIndex * 0.1}s`;
          letterSpan.textContent = letter;
          wordSpan.appendChild(letterSpan);
        });

        heading.appendChild(wordSpan);
        heading.appendChild(document.createTextNode(' '));
      });
    }
  }, []);

  return (
    <section className="hero text-left bg-black text-white relative">
    {/* Background Image */}
    <img
      src="images/bb.jpg"
      className="w-full absolute top-0 left-0 object-cover opacity-30 z-0"  // Make sure the background image stays behind
    />
    
    {/* Container for Logo and Menu */}
    <div className="flex justify-between items-center px-20 relative z-10">
      {/* Logo */}
      <h1 className="text-4xl mt-6 font-bold text-white" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)' }}>
        Deskify
      </h1>
  
      {/* Hamburger Menu Button for Mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white p-2 rounded-md focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
  
      {/* Navigation Links */}
      <nav>
        <ul className={`lg:flex mt-6 space-x-8 text-white ${menuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>



      <div className="relative mx-auto  py-20 max-w-screen-lg px-20">
        <h1 className="word text-white font-bold mb-6 animate-fadeInDown" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)' }}>
          Welcome to Deskify
        </h1>
        <p className="text-xl mb-10 text-gray-300 animate-fadeInUp">
          Discover the best products to transform your workspace into an <br />
          organized, productive environment. Stay updated with our blog <br />
          for workspace tips and latest trends!
        </p>
        <div className="flex space-x-6 mb-10 animate-fadeInUp delay-200">
        <div className="mt-2">
        <a href="/products" className="bg-black  text-white font-bold py-3 px-6 rounded-full transition duration-300" style={{ boxShadow: " 4px 4px 10px white" }} >
          Shop Workspace Products
        </a>
      </div>
      <div className="mt-2">
        <a href="/posts/blogs" className="bg-black  text-white font-bold py-3 px-6 rounded-full transition duration-300" style={{ boxShadow: " 4px 4px 10px white" }} >
          Read Our Blogs
        </a>
      </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4 animate-fadeInUp delay-400">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg text-gray-400 animate-fadeInUp delay-500">
            "Deskify’s products transformed my workspace into a productivity haven!"
          </p>
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      
      <HeroSection menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Hero;
