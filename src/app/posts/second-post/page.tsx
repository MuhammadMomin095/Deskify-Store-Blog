import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog2 = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg mt-60 animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          Ergonomic Office Furniture for Better Productivity
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          In today's fast-paced world, creating an ergonomic workspace is essential for boosting productivity and minimizing discomfort. Ergonomic office furniture, such as adjustable desks and chairs, helps support your posture, reducing the risk of strain and injury.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          By optimizing your work environment, ergonomic furniture enhances focus and performance. It’s designed to adapt to your body’s natural movements, allowing you to work for longer hours without feeling fatigued.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Ergonomic chairs, with adjustable height, lumbar support, and tilt mechanisms, ensure comfort and prevent back pain. Meanwhile, sit-stand desks offer flexibility, allowing you to alternate between sitting and standing throughout the day.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Investing in ergonomic office furniture is an investment in your health, productivity, and overall well-being, making it a must-have for anyone who spends significant time working at a desk.
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

export default Blog2;
