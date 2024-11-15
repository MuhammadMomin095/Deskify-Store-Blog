import React from "react";

const About = () => {
  return (
    <section className="about mt-96 bg-gradient-to-r from-[#F9FAFB] to-[#D1D5DB] text-gray-900 py-20 text-center animate-fadeInUp shadow-lg hover:scale-105 transition-transform">
      <h2 className="text-5xl font-semibold mb-4" style={{ textShadow: '1px 1px 3px rgba(0, 255, 255, 0.5), -1px -1px 3px rgba(255, 255, 0, 0.5)' }}>About Deskify</h2>
      <p className="text-lg text-shadow-lg mb-8 w-3/4 mx-auto">
        Deskify is your ultimate destination for modern, stylish, and functional office furniture. From sleek desks to complete workspace setups, we offer solutions that enhance productivity and elevate your work environment.
      </p>

      {/* Mission Statement */}
      <h3 className="text-3xl font-medium mb-4">Our Mission</h3>
      <p className="text-lg text-shadow-lg mb-8 w-3/4 mx-auto">
        At Deskify, our mission is to provide high-quality, ergonomic, and beautifully designed office furniture that helps you create the perfect workspace. We aim to combine style with functionality, ensuring that your work environment is as productive as it is aesthetically pleasing.
      </p>

      {/* Image and Text Section */}
      <div className="flex flex-wrap justify-between items-center w-full max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          {/* Updated Image Container */}
          <div className="relative w-3/4 h-80 transform transition duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl image-container">
            <img src="images/2.jpg" alt="Deskify" className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg" />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-left md:pl-12 md:order-1">
          <p className="text-lg text-shadow-lg">
            Our products are designed to meet the needs of modern professionals. From executive desks to minimalist setups, Deskify ensures quality and comfort in every piece. Discover the perfect balance between design and functionality.
          </p>
        </div>
      </div>

      {/* Unique Selling Points */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
          <h4 className="text-2xl font-semibold mb-2">Ergonomic Designs</h4>
          <p>Our furniture is designed to ensure comfort and enhance productivity, making your work environment stress-free.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
          <h4 className="text-2xl font-semibold mb-2">High-Quality Materials</h4>
          <p>We use premium materials to craft furniture that is durable, stylish, and built to last.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
          <h4 className="text-2xl font-semibold mb-2">Modern Aesthetics</h4>
          <p>Our designs are sleek, modern, and perfect for any professional workspace.</p>
        </div>
      </div>

      {/* Customer Testimonials */}
      <h3 className="text-3xl font-medium mt-12 mb-4">What Our Customers Say</h3>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
          <p>"Deskify has completely transformed my office! The quality and design are exceptional."</p>
          <span className="block mt-2 text-sm text-gray-600">- Sarah L.</span>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
          <p>"The ergonomic desk I purchased from Deskify has made working from home so much more comfortable."</p>
          <span className="block mt-2 text-sm text-gray-600">- Michael D.</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <a href="/products" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Explore Our Collection
        </a>
      </div>
    </section>
  );
};

export default About;
