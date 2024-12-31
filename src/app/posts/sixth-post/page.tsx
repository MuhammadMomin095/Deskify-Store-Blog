import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog6 = () => {
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
        How to Maintain Your Wooden Furniture for Longevity
        </h2>
      </div>
          

      <div className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed space-y-4">
        <p>
          Wooden furniture is a timeless investment. However, like all valuable possessions, it requires proper care to ensure it remains functional and beautiful for years to come.
        </p>
        <p>
          To maintain wooden furniture, make sure to keep it away from direct sunlight to prevent warping and fading. Regular dusting with a soft cloth is essential to avoid scratches.
        </p>
        <p>
          Every few months, use a wood polish to maintain the shine and protect the surface from damage. Also, consider waxing your wooden furniture for added protection.
        </p>
        <p>
          Following these simple maintenance tips will help extend the life of your wooden furniture, ensuring it remains a beautiful and lasting part of your home.
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

export default Blog6;
