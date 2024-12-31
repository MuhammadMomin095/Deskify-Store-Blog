import React from "react";

const About = () => {
  return (
    <section className="text-left bg-black text-white relative py-24 px-16">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("images/20.jpg")' }}
      ></div>

      <div className="relative z-10 text-gray-300 text-center">
        <div className="flex justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-full sm:w-[350px] h-[87px] justify-center flex items-center bg-transparent border-4 text-white border-black" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            About Deskify
          </h2>
        </div>
        

        <p className="text-lg sm:text-xl mt-16 text-shadow-lg mb-8 w-full sm:w-1/2 mx-auto text-center sm:text-left">
  Deskify is your ultimate destination for modern, stylish, and functional office furniture. From sleek desks to complete workspace setups, we offer solutions that enhance productivity and elevate your work environment.
</p>

{/* Mission Statement */}
<div className="flex items-center justify-center">
  <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-12 mb-4 text-center">
  Our Mission
</h3>
</div>
<p className="text-lg sm:text-xl text-shadow-lg mb-8 w-full sm:w-1/2 mx-auto text-center sm:text-left">
  At Deskify, our mission is to provide high-quality, ergonomic, and beautifully designed office furniture that helps you create the perfect workspace. We aim to combine style with functionality, ensuring that your work environment is as productive as it is aesthetically pleasing.
</p>




       {/* Image and Text Section */}
<div className="flex flex-col md:flex-row items-center mt-12 px-6 sm:px-12 md:px-16">
  <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
    {/* Updated Image Container */}
    <div className="relative w-full md:w-64 h-80 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img
        src="images/2.jpg"
        alt="Deskify"
        className="w-full h-full object-cover rounded-lg border-4 border-[#1D1915]"
        style={{ boxShadow: "20px 20px 20px #C1AA90" }}
      />
    </div>
  </div>
  <div className="md:w-1/2 text-left md:order-1 px-4 sm:px-6">
    <p className="text-lg sm:text-xl text-gray-200 text-shadow-lg">
      Our products are designed to meet the needs of modern professionals. From executive desks to minimalist setups, Deskify ensures quality and comfort in every piece. Discover the perfect balance between design and functionality.
    </p>
  </div>
</div>






      {/* Unique Selling Points */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-12 md:px-20 mt-12">
  <div className="bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
    <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">Ergonomic Designs</h4>
    <p className="text-[#C1AA90] text-sm sm:text-base">Our furniture is designed to ensure comfort and enhance productivity, making your work environment stress-free.</p>
  </div>
  <div className="bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
    <h4 className="text-xl sm:text-2xl text-white font-semibold mb-2">High-Quality Materials</h4>
    <p className="text-[#C1AA90] text-sm sm:text-base">We use premium materials to craft furniture that is durable, stylish, and built to last.</p>
  </div>
  <div className="bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
    <h4 className="text-xl sm:text-2xl text-white font-semibold mb-2">Modern Aesthetics</h4>
    <p className="text-[#C1AA90] text-sm sm:text-base">Our designs are sleek, modern, and perfect for any professional workspace.</p>
  </div>
</div>

{/* Customer Testimonials */}
<div className="flex items-center justify-center">
  <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-12 mb-4 text-center">
    What Our Customers Say
  </h3>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center px-6 sm:px-12 md:px-20 mt-8">
  <div className="p-4 bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] shadow-lg rounded-lg hover:scale-105 transition-transform" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
    <p className="text-[#C1AA90] text-sm sm:text-base">"Deskify has completely transformed my office! The quality and design are exceptional."</p>
    <span className="block mt-2 text-xs sm:text-sm text-white">- Sarah L.</span>
  </div>
  <div className="p-4 bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] shadow-lg rounded-lg hover:scale-105 transition-transform" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
    <p className="text-[#C1AA90] text-sm sm:text-base">"The ergonomic desk I purchased from Deskify has made working from home so much more comfortable."</p>
    <span className="block mt-2 text-xs sm:text-sm text-white">- Michael D.</span>
  </div>
</div>


        {/* Call to Action */}
        <div className="mt-12">
          <a href="/products" className="bg-gray-90 text-white font-bold py-3 px-6 rounded-full transition duration-300" style={{ boxShadow: " 4px 4px 10px white" }} >
            Explore Our Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
