import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog4 = () => {
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
        The Role of Office Furniture in Employee Wellbeing
        </h2>
      </div>



      <div className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed space-y-4"> 
        <p>
          Discover how the right office furniture plays a significant role in improving employee health and well-being. Ergonomic chairs and desks are not just about comfort—they can help prevent injuries and boost productivity in the long run.
        </p>
        <p>
          When employees are comfortable in their workspaces, they are more focused and less prone to discomfort or fatigue. The right furniture can reduce stress, promote better posture, and support physical health.
        </p>
        <p>
          Choose furniture that encourages movement, such as adjustable standing desks and swivel chairs. This promotes blood circulation and prevents long-term health issues associated with sedentary work.
        </p>
        <p>
          Investing in employee well-being through quality office furniture creates a healthier, happier, and more productive workplace.
        </p>
        </div>
      

      {/* Back to blogs */}
      <div className="text-center mt-8 sm:mt-12">
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

export default Blog4;
