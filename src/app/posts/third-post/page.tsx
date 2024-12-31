import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog3 = () => {
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
        Creative Storage Ideas for Your Office
        </h2>
      </div>



      <div className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed space-y-4"> 
        <p >
          A clutter-free workspace leads to greater productivity. Whether you're working from home or in an office setting, organizing your workspace can significantly improve efficiency. Explore creative storage solutions to keep your documents, supplies, and equipment in order.
        </p>
        <p >
          Think vertical: Use shelves, pegboards, and wall-mounted organizers to maximize storage without taking up valuable desk space. Invest in multifunctional furniture, such as desks with built-in drawers or filing cabinets, to reduce clutter and increase functionality.
        </p>
        <p >
          Creative storage also involves decluttering the digital space. Cloud storage, digital filing systems, and organized task management apps help streamline your workflow.
        </p>
        <p >
          By implementing smart storage solutions, you can create a more organized and efficient workspace, helping you stay focused and productive throughout the day.
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

export default Blog3;
