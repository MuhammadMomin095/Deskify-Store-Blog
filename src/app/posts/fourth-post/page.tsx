import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog4 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          The Role of Office Furniture in Employee Wellbeing
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Discover how the right office furniture plays a significant role in improving employee health and well-being. Ergonomic chairs and desks are not just about comfort—they can help prevent injuries and boost productivity in the long run.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          When employees are comfortable in their workspaces, they are more focused and less prone to discomfort or fatigue. The right furniture can reduce stress, promote better posture, and support physical health.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Choose furniture that encourages movement, such as adjustable standing desks and swivel chairs. This promotes blood circulation and prevents long-term health issues associated with sedentary work.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Investing in employee well-being through quality office furniture creates a healthier, happier, and more productive workplace.
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

export default Blog4;
