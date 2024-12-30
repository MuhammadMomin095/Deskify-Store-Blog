import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog2 = () => {
  return (
    <div className="text-left bg-black text-white relative">
    {/* Navbar */}
    <Navbar />

   {/* Background Image */}
  <img
    src="/images/aa.jpg"
    className="w-full  absolute top-0 left-0 object-cover opacity-30 z-0"  
  />

  
  
  
  {/* Container for Logo and Menu */}



    
  <section className="relative z-10 text-gray-300 text-center px-40 py-16">
     {/* Section Heading */}
     <div className="flex justify-center z-10 mt-32">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 text-gray-100 justify-center flex items-center bg-transparent  ">
        Ergonomic Office Furniture for Better Productivity
        </h2>
      </div>
          
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          In today's fast-paced world, creating an ergonomic workspace is essential for boosting productivity and minimizing discomfort. Ergonomic office furniture, such as adjustable desks and chairs, helps support your posture, reducing the risk of strain and injury.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          By optimizing your work environment, ergonomic furniture enhances focus and performance. It’s designed to adapt to your body’s natural movements, allowing you to work for longer hours without feeling fatigued.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Ergonomic chairs, with adjustable height, lumbar support, and tilt mechanisms, ensure comfort and prevent back pain. Meanwhile, sit-stand desks offer flexibility, allowing you to alternate between sitting and standing throughout the day.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Investing in ergonomic office furniture is an investment in your health, productivity, and overall well-being, making it a must-have for anyone who spends significant time working at a desk.
        </p>
      

      {/* Back to blogs */}
      <div className="text-center mt-12">
        <a href="/posts/blogs" className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center justify-center transition-all transform  hover:scale-105" style={{ boxShadow: " 4px 4px 10px white" }}>
          Back to Blogs
        </a>
      </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog2;
