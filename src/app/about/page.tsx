'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="text-left bg-black text-white relative">
      {/* Navbar */}
      <Navbar />

     {/* Background Image */}
    <img
      src="bg/10.jpg"
      className="w-full  absolute top-0 left-0 object-cover opacity-30 z-0"  
    />
 
    
    
    
    {/* Container for Logo and Menu */}
  


      
    <section className="relative z-10 text-gray-300 text-center py-16">
       {/* Section Heading */}
       <div className="flex justify-center z-10 mt-32">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[350px] h-[87px] justify-center flex items-center bg-transparent border-4 text-white border-black" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            About Deskify
          </h2>
        </div>
        <p className="text-lg text-shadow-lg mb-8 w-3/4 mx-auto">
          Deskify is the ultimate platform designed to elevate your productivity and workspace experience. Whether you're working from home, in the office, or remotely, Deskify offers innovative solutions that transform your workspace into a hub of comfort, efficiency, and inspiration. Our carefully curated range of ergonomic furniture, smart gadgets, and workspace accessories cater to the diverse needs of professionals and businesses.
        </p>
        <div className="flex flex-wrap justify-between items-center w-full max-w-6xl mx-auto">
  <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
    <div className="relative w-1/2 h-[370px] border-4 border-[#1D1915] transform transition duration-500 hover:scale-105 hover:shadow-2xl" >
      <img src="images/2.jpg" alt="About Us" className="w-full h-full object-cover shadow-lg" style={{ boxShadow: "20px 20px 32px #C1AA90" }} />
    </div>
       



          </div>
          <div className="w-full md:w-1/2 text-left md:pl-12">
            <p className="text-lg text-shadow-lg">
              At Deskify, we believe that your workspace should be more than just a desk. It should be a space that encourages productivity, fosters creativity, and promotes well-being. Our products are not only functional but also designed to enhance the overall aesthetics of your environment. From ergonomic chairs and height-adjustable desks to customizable accessories, every Deskify product is designed to help you work better and live better.
            </p>
            <p className="text-lg text-shadow-lg mt-6">
              Our mission is to help you design a workspace that fuels success. We understand the importance of a good work-life balance and how the right tools can make all the difference in achieving that. Whether you're setting up a home office, upgrading your corporate space, or creating a shared workspace for your team, Deskify provides the products that meet your needs and exceed your expectations.
            </p>
            <p className="text-lg text-shadow-lg mt-6">
              Deskify is committed to delivering products that combine quality, sustainability, and innovation. We carefully select and test every product in our range to ensure it meets the highest standards of performance and durability. Our collection includes everything from ergonomic office chairs and desks to organizational tools and tech accessories, all designed to support the demands of modern work.
            </p>
          </div>
        </div>
      </section>

      {/* Deskify Values Section */}
      <section className="about px-24 text-gray-100  text-center animate-fadeInUp transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg rounded-lg">
        <h1 className="text-4xl text-shadow-lg font-semibold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Our Values</h1>
        <p className="text-lg text-shadow-lg mb-8 w-3/4 mx-auto ">
          At Deskify, we are guided by a set of core values that define our approach to business and the products we offer:
        </p>

         {/* Unique Selling Points */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-40 mt-12">
          <div className="bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            <h4 className="text-2xl font-semibold text-white mb-2">Innovation</h4>
            <p className="text-[#C1AA90]">We continuously innovate to bring you cutting-edge products that help you stay ahead of the curve and improve your workspace efficiency.</p>
          </div>
          <div className="bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            <h4 className="text-2xl text-white font-semibold mb-2">Sustainability</h4>
            <p className="text-[#C1AA90]"> Sustainability is at the heart of what we do. We strive to ensure that all our products are made using eco-friendly materials and processes.</p>
          </div>
          <div className="bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            <h4 className="text-2xl text-white font-semibold mb-2">Customer Focus</h4>
            <p className="text-[#C1AA90]">Our customers are our top priority. We are committed to providing exceptional customer service and delivering products that meet your needs.</p>
          </div>
        </div>


      </section>

      {/* Deskify Product Range */}
      <section className="about px-24 py-10 text-gray-100  text-center animate-fadeInUp transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg rounded-lg">
        <h1 className="text-4xl text-shadow-lg font-semibold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Our Product Range</h1>
        <p className="text-lg text-shadow-lg mb-8 w-3/4 mx-auto">
          Deskify offers a wide variety of products designed to cater to every aspect of your workspace. Whether you’re looking for ergonomically designed chairs, adjustable desks, or productivity-boosting accessories, we have everything you need to optimize your workspace.
        </p>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-40 mt-12">
          <div className="bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            <h4 className="text-2xl font-semibold text-white mb-2">Ergonomic Furniture</h4>
            <p className="text-[#C1AA90]"> Comfortable and supportive furniture is essential for a productive day at work. Our ergonomic chairs and desks are designed to provide long-lasting comfort and support for all-day use.</p>
          </div>
          <div className="bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            <h4 className="text-2xl text-white font-semibold mb-2">Smart Office Accessories</h4>
            <p className="text-[#C1AA90]">Maximize your workspace efficiency with our range of smart accessories, from desk organizers to tech gadgets that help you stay organized and productive.</p>
          </div>
          <div className="bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            <h4 className="text-2xl text-white font-semibold mb-2">Workspace Storage Solutions</h4>
            <p className="text-[#C1AA90]">Keep your workspace neat and tidy with our storage solutions, including filing cabinets, shelves, and drawer organizers.</p>
          </div>
        </div>





      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
