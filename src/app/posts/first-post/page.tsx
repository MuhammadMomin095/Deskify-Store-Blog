import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog1 = () => {
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
        How Handmade Craft Products Can Enhance Your Home Décor
        </h2>
      </div>

        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          At Craftiverse, we believe that handcrafted products bring a unique charm and warmth to any living space. Whether it’s a beautiful hand-carved table or an intricately designed shelf, each item adds personality and style to your home.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Handcrafted items not only elevate the décor of your home but also promote sustainability by supporting artisans and reducing mass production. When you choose handmade craft products, you’re investing in artistry and unique creations.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Every product from Craftiverse has a story behind it. Our craftsmen pour their skills, passion, and creativity into each piece. Unlike mass-produced products, handcrafted items offer quality, attention to detail, and personalization.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          From rustic wooden tables to hand-painted vases, handcrafted products can be a great conversation starter. They’re perfect for creating a warm and inviting atmosphere in your home, making your living space more comfortable and memorable.
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

export default Blog1;
