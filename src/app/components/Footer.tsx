'use client';

import { FaLinkedin, FaGithub, FaInstagram,} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if footer is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      
      // Check if the footer element is found (not null)
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (footerPosition < screenPosition) {
          setIsVisible(true); // Set visibility to true when footer is in view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer
      className="relative bg-gradient-to-r from-black via-black to-[#1D1915] text-white py-12 transition-opacity duration-500 ease-in-out"
      
      
    >
      {/* Top Border Animation */}
      <div className="top-border absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1D1915] to-black"></div>

      {/* Footer Content */}
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4 text-white animate-textWave">Stay Connected</h3>
        <p className="text-sm text-white mb-4 animate-textWave">Follow us on social media for updates!</p>

        {/* Social Icons */}
        <div className="social-icons items-center flex justify-center space-x-6 mb-6 sm:flex-col sm:space-x-0 sm:space-y-4">
          <a
            href="https://www.linkedin.com/in/muhammad-momin-62069b2b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/MuhammadMomin095"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/mominshykh/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Arrow (Hover Effect) */}
        <p className="footer-arrow text-2xl text-white cursor-pointer mt-6 transition-transform transform hover:translate-y-[-10px]">
          ↑
        </p>

        {/* Copyright */}
        <p className="text-sm font-bold text-white mt-4">
          &copy; {new Date().getFullYear()} My E-Commerce Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
