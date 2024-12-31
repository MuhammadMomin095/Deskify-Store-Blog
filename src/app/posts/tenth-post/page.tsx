import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog10 = () => {
  return (
    <div className="text-left bg-black text-white relative">
    {/* Navbar */}
    <Navbar />

   {/* Background Image */}
  <img
    src="/images/aa.jpg"
    className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] absolute top-0 left-0 object-cover opacity-30 z-0"  
  />

  
  
  
  {/* Container for Logo and Menu */}



    
  <section className="relative z-10 text-gray-300 text-center px-6 sm:px-10 md:px-16 lg:px-40 py-16">
     {/* Section Heading */}
     <div className="flex justify-center z-10 mt-20 sm:mt-32">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 text-gray-100 justify-center flex items-center bg-transparent  ">
        How to Make Your Home Office More Comfortable and Productive
        </h2>
      </div>
         

      <div className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed space-y-4">
        <p >
          A comfortable and productive home office is essential for staying focused and maintaining work-life balance. Here are some tips to create the ideal workspace:
        </p>
        <p >
          Invest in an ergonomic chair and desk that support your posture. Proper seating can reduce strain and fatigue, allowing you to work longer without discomfort.
        </p>
        <p >
          Personalize your space with items that inspire you, like plants or artwork. These small additions can boost your mood and make the environment more pleasant.
        </p>
        <p >
          Ensure adequate lighting, both natural and artificial. Task lighting helps prevent eye strain and creates a focused atmosphere for work.
        </p>
        <p >
          Finally, keep your home office organized and free from distractions. A clutter-free environment promotes concentration and increases productivity.
        </p>
        </div>
     

      {/* Back to blogs */}
      <div className="text-center mt-8 sm:mt-12">
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

export default Blog10;
