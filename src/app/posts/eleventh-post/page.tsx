import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog11 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          The Role of Furniture in Creating a Cozy Atmosphere
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Furniture plays a key role in shaping the mood and atmosphere of a room. To create a cozy and inviting environment, select pieces that add warmth, comfort, and style to your space.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Soft fabrics, such as velvet or linen, on sofas and chairs can add a sense of warmth. Additionally, choosing pieces with rounded edges instead of sharp angles creates a more relaxed, cozy vibe.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Opt for furniture that encourages relaxation and socializing, such as comfortable armchairs, plush cushions, and coffee tables for gatherings.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Mixing textures and colors that promote relaxation, like muted tones and natural materials, can enhance the comfort and coziness of any room.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          With the right furniture, you can transform any space into a cozy retreat where you can unwind and relax.
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

export default Blog11;
