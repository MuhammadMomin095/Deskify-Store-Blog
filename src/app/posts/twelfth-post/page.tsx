import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog12 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          The Best Materials for Durable and Stylish Furniture
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          When it comes to choosing furniture that will stand the test of time, selecting the right materials is essential. Here are some of the best materials for creating durable and stylish pieces:
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Solid wood, such as oak or walnut, is a classic choice for furniture that will last for generations. It offers natural beauty and can be refinished to maintain its elegance.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Leather is another durable material that improves with age. It adds sophistication to any room while being incredibly resilient and easy to clean.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          For a modern and minimalistic look, metal furniture pieces are durable and low-maintenance, making them an excellent choice for industrial-style interiors.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Finally, fabrics like high-quality linen and velvet are perfect for upholstery, providing both comfort and luxury to furniture pieces.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Choosing the right materials for your furniture ensures both long-lasting durability and a beautiful aesthetic.
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

export default Blog12;
