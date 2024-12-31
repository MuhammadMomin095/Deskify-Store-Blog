import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog5 = () => {
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
        The Importance of Sustainable Craftsmanship in Furniture Making
        </h2>
      </div>

      <div className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed space-y-4">
       
        <p >
          Sustainable craftsmanship in furniture making is essential for creating high-quality pieces that are eco-friendly. By choosing materials that are responsibly sourced and prioritizing durability, sustainable craftsmen are helping protect the environment.
        </p>
        <p >
          Sustainable furniture isn’t just about reducing waste; it’s about investing in pieces that last longer and have a lower environmental footprint. These products are built to last, saving you money in the long run and keeping furniture out of landfills.
        </p>
        <p >
          Whether it’s reclaimed wood or eco-friendly finishes, sustainable furniture supports artisans who value the planet, creating a beautiful, functional, and responsible piece of art.
        </p>
        <p >
          Choose sustainable craftsmanship to make an impact in your home and the world by supporting ethical practices and reducing environmental harm.
        </p>
        </div>
     

      {/* Back to blogs */}
      <div className="text-center mt-8 sm:mt-12">
        <a href="/posts/blogs" className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center justify-center transition-all transform  hover:scale-105"style={{ boxShadow: " 4px 4px 10px white" }}>
          Back to Blogs
        </a>
      </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog5;
