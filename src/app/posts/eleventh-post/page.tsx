import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog11 = () => {
  return (
    
    <div className="text-left bg-black text-white relative">
    {/* Navbar */}
    <Navbar />

   {/* Background Image */}
  <img
    src="/images/aa.jpg"
    className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]  absolute top-0 left-0 object-cover opacity-30 z-0"  
  />

  
  
  
  {/* Container for Logo and Menu */}



    
  <section className="relative z-10 text-gray-300 text-center px-6 sm:px-10 md:px-16 lg:px-40 py-16">
     {/* Section Heading */}
     <div className="flex justify-center z-10 mt-20 sm:mt-32">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 text-gray-100 justify-center flex items-center bg-transparent  ">
        The Role of Furniture in Creating a Cozy Atmosphere
        </h2>
      </div>

      <div className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed space-y-4">
        <p>
          Furniture plays a key role in shaping the mood and atmosphere of a room. To create a cozy and inviting environment, select pieces that add warmth, comfort, and style to your space.
        </p>
        <p>
          Soft fabrics, such as velvet or linen, on sofas and chairs can add a sense of warmth. Additionally, choosing pieces with rounded edges instead of sharp angles creates a more relaxed, cozy vibe.
        </p>
        <p>
          Opt for furniture that encourages relaxation and socializing, such as comfortable armchairs, plush cushions, and coffee tables for gatherings.
        </p>
        <p>
          Mixing textures and colors that promote relaxation, like muted tones and natural materials, can enhance the comfort and coziness of any room.
        </p>
        <p>
          With the right furniture, you can transform any space into a cozy retreat where you can unwind and relax.
        </p>
        </div>
       
      

      {/* Back to blogs */}
      <div className="text-center mt-8 sm:mt-12">
        <a href="/posts/blogs" className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center justify-center transition-all transform hover:scale-105" style={{ boxShadow: " 4px 4px 10px white" }}>
          Back to Blogs
        </a>
      </div>
      </section>

      <Footer />
    </div>
    
    
    

  );
};

export default Blog11;
