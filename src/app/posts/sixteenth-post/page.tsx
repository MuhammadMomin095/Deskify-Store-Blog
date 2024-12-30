import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog16 = () => {
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
        Modern vs. Traditional Furniture: What's Right for Your Home?
        </h2>
      </div>
          
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Choosing between modern and traditional furniture can be a challenge. Each style has its own appeal, and the right choice depends on your personal preferences and the overall aesthetic of your home. Let’s explore the differences:
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Modern furniture is known for its clean lines, minimalistic design, and use of innovative materials. It often incorporates sleek metal, glass, and synthetic fabrics, making it ideal for contemporary and industrial-style interiors.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Traditional furniture, on the other hand, is characterized by rich woods, intricate details, and classic designs. It brings a sense of warmth and history to a room, making it perfect for more traditional or vintage-style spaces.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          If you have a modern home, modern furniture might be the best fit. But if your space has more character or you want to create a timeless look, traditional pieces may be the way to go.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Ultimately, mixing both styles can create an eclectic and personalized environment that blends the best of both worlds.
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

export default Blog16;
