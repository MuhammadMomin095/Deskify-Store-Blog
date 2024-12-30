import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog10 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          How to Make Your Home Office More Comfortable and Productive
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          A comfortable and productive home office is essential for staying focused and maintaining work-life balance. Here are some tips to create the ideal workspace:
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Invest in an ergonomic chair and desk that support your posture. Proper seating can reduce strain and fatigue, allowing you to work longer without discomfort.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Personalize your space with items that inspire you, like plants or artwork. These small additions can boost your mood and make the environment more pleasant.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Ensure adequate lighting, both natural and artificial. Task lighting helps prevent eye strain and creates a focused atmosphere for work.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Finally, keep your home office organized and free from distractions. A clutter-free environment promotes concentration and increases productivity.
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

export default Blog10;
