import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog6 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          How to Maintain Your Wooden Furniture for Longevity
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Wooden furniture is a timeless investment. However, like all valuable possessions, it requires proper care to ensure it remains functional and beautiful for years to come.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          To maintain wooden furniture, make sure to keep it away from direct sunlight to prevent warping and fading. Regular dusting with a soft cloth is essential to avoid scratches.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Every few months, use a wood polish to maintain the shine and protect the surface from damage. Also, consider waxing your wooden furniture for added protection.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Following these simple maintenance tips will help extend the life of your wooden furniture, ensuring it remains a beautiful and lasting part of your home.
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

export default Blog6;
