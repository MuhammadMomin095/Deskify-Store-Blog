'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Comments from './components/Comments';
import Cart from './components/Cart';
import ImageGallery from './components/ImageGallery';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import About from './components/About';







const cartItems = [
  { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
  { id: 2, name: 'Product 2', price: 49.99, quantity: 1 }
];

const HomePage = () => {


  // Scroll Event Listener to Show Footer
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        footer?.classList.add('footer-visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

  return (

    <div>
      <Navbar />
      <Hero />
      <About />
      <ImageGallery />
      <Card />
      <Cart />
      <Comments />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
