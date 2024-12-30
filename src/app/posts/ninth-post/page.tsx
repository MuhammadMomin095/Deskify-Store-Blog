import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog9 = () => {
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
        Why Custom Furniture is a Smart Investment for Your Home
        </h2>
      </div>

        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Investing in custom furniture offers several benefits over mass-produced options. When you choose custom furniture, you’re getting pieces tailored specifically to your home’s aesthetic and functional needs.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Custom furniture is built to fit your space perfectly, ensuring optimal use of your available square footage. Whether it’s a custom-built wardrobe or a one-of-a-kind coffee table, you get exactly what you need.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Additionally, custom furniture allows you to work directly with designers or craftsmen, ensuring your style is reflected in each piece. It’s not just furniture; it’s an investment in long-lasting quality and personalized design.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          For a home that reflects your unique style, custom furniture is the perfect way to make a lasting impact.
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

export default Blog9;
