import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog15 = () => {
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
        How to Create a Relaxing Bedroom with the Right Furniture
        </h2>
      </div>

        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Your bedroom should be a sanctuary where you can relax and unwind. Choosing the right furniture is essential in creating a peaceful and calming atmosphere. Here are some tips:
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Start with a comfortable bed. Choose a bed frame and mattress that support a good night’s sleep. Soft, cozy bedding in neutral tones will enhance the sense of calm.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Keep the furniture minimal. Too many pieces in the bedroom can make the space feel crowded. A simple nightstand, dresser, and comfortable chair should be enough.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Use furniture with soft lines and gentle materials, like wood or upholstered pieces, to create a warm and welcoming environment.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Adding storage furniture that keeps your space clutter-free is also essential to maintain a relaxing bedroom environment.
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

export default Blog15;
