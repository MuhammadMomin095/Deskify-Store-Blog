"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

// Define the props expected by HeroSection
interface HeroSectionProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ menuOpen, toggleMenu }) => {
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
      <Navbar />
      {/* Background Image */}
      <img
        src="images/bb.jpg"
        className="w-full absolute top-0 left-0 object-cover opacity-30 z-0 sm:h-full "  // Ensures full screen coverage
      />

      <div className="relative mx-auto py-20 px-6 sm:px-12 md:px-20 max-w-screen-lg">
        <h1 className="word text-white font-bold mb-6 animate-fadeInDown mt-28 text-4xl sm:text-5xl lg:text-6xl" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)' }}>
          Welcome to Deskify
        </h1>
        <p className="text-xl mb-10 text-gray-300 animate-fadeInUp sm:text-lg lg:text-xl">
          Discover the best products to transform your workspace into an <br />
          organized, productive environment. Stay updated with our blog <br />
          for workspace tips and latest trends!
        </p>

        
        <div className="flex flex-wrap justify-start lg:space-x-6 lg:space-y-2 md:space-y-0 space-y-7 mb-10 delay-200">
          <div className="mt-2">
            <a href="/products" className="bg-black text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full sm:w-auto" style={{ boxShadow: " 4px 4px 10px white" }} >
              Shop Products
            </a>
          </div>
          <div className="mt-2">
            <a href="/posts/blogs" className="bg-black text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full sm:w-auto" style={{ boxShadow: " 4px 4px 10px white" }} >
              Read Our Blogs
            </a>
          </div>
        </div>



        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4 animate-fadeInUp delay-400  sm:text-2xl lg:text-3xl">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg text-gray-400 animate-fadeInUp delay-500  sm:text-base lg:text-lg">
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
