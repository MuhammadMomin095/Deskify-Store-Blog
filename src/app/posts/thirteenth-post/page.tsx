import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog13 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          How to Incorporate Vintage Furniture into Modern Spaces
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Vintage furniture adds character and charm to any space. When combined with modern décor, it creates a unique and stylish atmosphere. Here’s how to incorporate vintage pieces into contemporary interiors:
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Start by choosing one or two key vintage pieces, such as a mid-century modern armchair or a retro coffee table. These items can serve as the focal point of the room.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Mix vintage with sleek, contemporary furniture to create contrast. For example, pair a vintage sofa with a modern, minimalist coffee table.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Complement vintage furniture with modern accessories like geometric lamps or contemporary art to maintain a balanced look.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          By blending old and new, you can create a unique space that reflects both your personal style and the timeless appeal of vintage furniture.
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

export default Blog13;
