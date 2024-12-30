import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog12 = () => {
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
        The Best Materials for Durable and Stylish Furniture
        </h2>
      </div>

          
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          When it comes to choosing furniture that will stand the test of time, selecting the right materials is essential. Here are some of the best materials for creating durable and stylish pieces:
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Solid wood, such as oak or walnut, is a classic choice for furniture that will last for generations. It offers natural beauty and can be refinished to maintain its elegance.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Leather is another durable material that improves with age. It adds sophistication to any room while being incredibly resilient and easy to clean.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          For a modern and minimalistic look, metal furniture pieces are durable and low-maintenance, making them an excellent choice for industrial-style interiors.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Finally, fabrics like high-quality linen and velvet are perfect for upholstery, providing both comfort and luxury to furniture pieces.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Choosing the right materials for your furniture ensures both long-lasting durability and a beautiful aesthetic.
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

export default Blog12;
