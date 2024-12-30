import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog14 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          Sustainable Furniture: Why It Matters and How to Choose
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          As environmental concerns grow, sustainability in furniture design and manufacturing has become increasingly important. Here’s why sustainable furniture matters and how to make eco-friendly choices:
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Sustainable furniture is made from materials that are renewable, recyclable, and ethically sourced. By choosing such pieces, you are contributing to reducing environmental impact and supporting responsible production practices.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          When selecting sustainable furniture, consider pieces made from reclaimed wood, bamboo, or materials that use less energy to produce.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Additionally, choosing high-quality items that will last longer reduces the need for replacements, further minimizing waste.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Opt for furniture brands with certifications like FSC (Forest Stewardship Council) or those that prioritize reducing their carbon footprint.
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

export default Blog14;
