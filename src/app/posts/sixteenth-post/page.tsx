import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog16 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          Modern vs. Traditional Furniture: What's Right for Your Home?
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Choosing between modern and traditional furniture can be a challenge. Each style has its own appeal, and the right choice depends on your personal preferences and the overall aesthetic of your home. Let’s explore the differences:
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Modern furniture is known for its clean lines, minimalistic design, and use of innovative materials. It often incorporates sleek metal, glass, and synthetic fabrics, making it ideal for contemporary and industrial-style interiors.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Traditional furniture, on the other hand, is characterized by rich woods, intricate details, and classic designs. It brings a sense of warmth and history to a room, making it perfect for more traditional or vintage-style spaces.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          If you have a modern home, modern furniture might be the best fit. But if your space has more character or you want to create a timeless look, traditional pieces may be the way to go.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Ultimately, mixing both styles can create an eclectic and personalized environment that blends the best of both worlds.
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

export default Blog16;
