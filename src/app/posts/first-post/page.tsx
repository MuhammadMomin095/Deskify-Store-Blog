import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog1 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          How Handmade Craft Products Can Enhance Your Home Décor
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Craftiverse, we believe that handcrafted products bring a unique charm and warmth to any living space. Whether it’s a beautiful hand-carved table or an intricately designed shelf, each item adds personality and style to your home.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Handcrafted items not only elevate the décor of your home but also promote sustainability by supporting artisans and reducing mass production. When you choose handmade craft products, you’re investing in artistry and unique creations.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Every product from Craftiverse has a story behind it. Our craftsmen pour their skills, passion, and creativity into each piece. Unlike mass-produced products, handcrafted items offer quality, attention to detail, and personalization.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          From rustic wooden tables to hand-painted vases, handcrafted products can be a great conversation starter. They’re perfect for creating a warm and inviting atmosphere in your home, making your living space more comfortable and memorable.
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

export default Blog1;
