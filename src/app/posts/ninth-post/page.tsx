import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog9 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          Why Custom Furniture is a Smart Investment for Your Home
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Investing in custom furniture offers several benefits over mass-produced options. When you choose custom furniture, you’re getting pieces tailored specifically to your home’s aesthetic and functional needs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Custom furniture is built to fit your space perfectly, ensuring optimal use of your available square footage. Whether it’s a custom-built wardrobe or a one-of-a-kind coffee table, you get exactly what you need.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Additionally, custom furniture allows you to work directly with designers or craftsmen, ensuring your style is reflected in each piece. It’s not just furniture; it’s an investment in long-lasting quality and personalized design.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          For a home that reflects your unique style, custom furniture is the perfect way to make a lasting impact.
        </p>
      </div>

      {/* Back to blogs */}
      <div className="text-center mt-12">
        <a href="/posts/blogs" className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-flex items-center justify-center transition-all transform hover:bg-blue-600 hover:scale-105">
          Back to Blogs
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog9;
