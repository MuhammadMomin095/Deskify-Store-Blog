import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog3 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          Creative Storage Ideas for Your Office
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          A clutter-free workspace leads to greater productivity. Whether you're working from home or in an office setting, organizing your workspace can significantly improve efficiency. Explore creative storage solutions to keep your documents, supplies, and equipment in order.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Think vertical: Use shelves, pegboards, and wall-mounted organizers to maximize storage without taking up valuable desk space. Invest in multifunctional furniture, such as desks with built-in drawers or filing cabinets, to reduce clutter and increase functionality.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Creative storage also involves decluttering the digital space. Cloud storage, digital filing systems, and organized task management apps help streamline your workflow.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          By implementing smart storage solutions, you can create a more organized and efficient workspace, helping you stay focused and productive throughout the day.
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

export default Blog3;
