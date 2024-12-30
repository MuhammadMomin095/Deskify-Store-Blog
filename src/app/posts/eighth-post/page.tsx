import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog8 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          How to Choose the Right Lighting for Your Home Office
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Lighting plays a crucial role in setting the right mood and boosting productivity in your home office. Whether you’re working on a laptop or taking a call, the right lighting can help reduce eye strain and create a focused environment.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Opt for adjustable task lighting, such as desk lamps with dimming options, to give you control over the intensity of light. Additionally, overhead lighting should be soft but bright enough to illuminate your workspace effectively.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Incorporating natural light into your home office setup is also essential. Position your desk near a window to take advantage of daylight and enhance your mood and focus.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          With the right lighting, you can create a comfortable, productive home office space that fosters creativity and reduces fatigue.
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

export default Blog8;
