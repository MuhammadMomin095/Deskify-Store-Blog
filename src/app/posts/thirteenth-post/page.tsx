import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog13 = () => {
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
        How to Incorporate Vintage Furniture into Modern Spaces
        </h2>
      </div>


      <div className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed space-y-4">
        <p>
          Vintage furniture adds character and charm to any space. When combined with modern décor, it creates a unique and stylish atmosphere. Here’s how to incorporate vintage pieces into contemporary interiors:
        </p>
        <p>
          Start by choosing one or two key vintage pieces, such as a mid-century modern armchair or a retro coffee table. These items can serve as the focal point of the room.
        </p>
        <p>
          Mix vintage with sleek, contemporary furniture to create contrast. For example, pair a vintage sofa with a modern, minimalist coffee table.
        </p>
        <p>
          Complement vintage furniture with modern accessories like geometric lamps or contemporary art to maintain a balanced look.
        </p>
        <p>
          By blending old and new, you can create a unique space that reflects both your personal style and the timeless appeal of vintage furniture.
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

export default Blog13;
