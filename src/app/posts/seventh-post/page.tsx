import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog7 = () => {
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
        The Benefits of Modular Furniture for Small Spaces
        </h2>
      </div>


      <div className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed space-y-4">
        <p >
          Modular furniture is the perfect solution for small spaces. By utilizing flexible and customizable furniture pieces, you can make the most of limited square footage.
        </p>
        <p >
          Modular furniture allows you to rearrange and adapt your living area without compromising on style or functionality. Whether it’s multi-purpose storage units, extendable tables, or modular sofas, the options are endless.
        </p>
        <p >
          These pieces are not only space-efficient but can also be aesthetically pleasing, making small spaces feel larger and more organized.
        </p>
        <p >
          Embrace modular furniture to create a stylish and practical living environment in your compact home.
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

export default Blog7;
