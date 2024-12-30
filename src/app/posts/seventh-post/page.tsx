import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog7 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          The Benefits of Modular Furniture for Small Spaces
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Modular furniture is the perfect solution for small spaces. By utilizing flexible and customizable furniture pieces, you can make the most of limited square footage.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Modular furniture allows you to rearrange and adapt your living area without compromising on style or functionality. Whether it’s multi-purpose storage units, extendable tables, or modular sofas, the options are endless.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          These pieces are not only space-efficient but can also be aesthetically pleasing, making small spaces feel larger and more organized.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Embrace modular furniture to create a stylish and practical living environment in your compact home.
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

export default Blog7;
