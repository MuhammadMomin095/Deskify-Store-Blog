import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog5 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          The Importance of Sustainable Craftsmanship in Furniture Making
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Sustainable craftsmanship in furniture making is essential for creating high-quality pieces that are eco-friendly. By choosing materials that are responsibly sourced and prioritizing durability, sustainable craftsmen are helping protect the environment.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Sustainable furniture isn’t just about reducing waste; it’s about investing in pieces that last longer and have a lower environmental footprint. These products are built to last, saving you money in the long run and keeping furniture out of landfills.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Whether it’s reclaimed wood or eco-friendly finishes, sustainable furniture supports artisans who value the planet, creating a beautiful, functional, and responsible piece of art.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Choose sustainable craftsmanship to make an impact in your home and the world by supporting ethical practices and reducing environmental harm.
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

export default Blog5;
