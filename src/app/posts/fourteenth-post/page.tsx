import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog14 = () => {
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
        Sustainable Furniture: Why It Matters and How to Choose
        </h2>
      </div>

        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          As environmental concerns grow, sustainability in furniture design and manufacturing has become increasingly important. Here’s why sustainable furniture matters and how to make eco-friendly choices:
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Sustainable furniture is made from materials that are renewable, recyclable, and ethically sourced. By choosing such pieces, you are contributing to reducing environmental impact and supporting responsible production practices.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          When selecting sustainable furniture, consider pieces made from reclaimed wood, bamboo, or materials that use less energy to produce.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Additionally, choosing high-quality items that will last longer reduces the need for replacements, further minimizing waste.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Opt for furniture brands with certifications like FSC (Forest Stewardship Council) or those that prioritize reducing their carbon footprint.
        </p>
      

      {/* Back to blogs */}
      <div className="text-center mt-12">
        <a href="/posts/blogs" className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center justify-center transition-all transform hover:scale-105" style={{ boxShadow: " 4px 4px 10px white" }}>
          Back to Blogs
        </a>
      </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog14;
