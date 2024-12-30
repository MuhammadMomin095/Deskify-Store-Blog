import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog15 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          How to Create a Relaxing Bedroom with the Right Furniture
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Your bedroom should be a sanctuary where you can relax and unwind. Choosing the right furniture is essential in creating a peaceful and calming atmosphere. Here are some tips:
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Start with a comfortable bed. Choose a bed frame and mattress that support a good night’s sleep. Soft, cozy bedding in neutral tones will enhance the sense of calm.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Keep the furniture minimal. Too many pieces in the bedroom can make the space feel crowded. A simple nightstand, dresser, and comfortable chair should be enough.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Use furniture with soft lines and gentle materials, like wood or upholstered pieces, to create a warm and welcoming environment.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Adding storage furniture that keeps your space clutter-free is also essential to maintain a relaxing bedroom environment.
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

export default Blog15;
