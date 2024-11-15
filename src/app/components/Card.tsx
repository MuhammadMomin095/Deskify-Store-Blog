// components/Card.tsx
import React from 'react';

const Card = () => {
  return (
    <section className="cards main-content py-12 bg-gradient-to-r from-[#E5E7EB] to-[#F3F4F6] shadow-lg hover:scale-105 transition-transform">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start justify-center p-8 rounded-lg">
        
        {/* Section Heading */}
        <h2 className="text-5xl font-semibold text-center mb-12 text-shadow text-gray-800" style={{ textShadow: '1px 1px 3px rgba(0, 255, 255, 0.5), -1px -1px 3px rgba(255, 255, 0, 0.5)' }}
>
          Discover the Wide Range of Deskify Products and Services to Elevate Your Workspace!
        </h2>

        {/* Card 1 */}
        <div className="card bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 animate-fadeInUp min-h-[350px]">
          <img src="images/20.jpg" alt="Deskify Products" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore Deskify's Products</h3>
          <p className="text-gray-600 mb-4">
            Deskify offers a wide variety of innovative products designed to optimize your workspace. From ergonomic desks to modern office accessories, discover products that blend functionality with style. Enhance your productivity and comfort with Deskify's high-quality workspace solutions.
          </p>
          <a href="/posts/first-post" className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</a>
        </div>

        {/* Card 2 */}
        <div className="card bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-rotate-1 animate-fadeInUp min-h-[350px]">
          <img src="images/21.jpg" alt="First Deskify Blog Post" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">First Deskify Blog Post</h3>
          <p className="text-gray-600 mb-4">
            In our first blog post, we dive into the importance of creating a comfortable and productive workspace. Learn how Deskify’s ergonomic furniture and accessories can help you improve your posture and overall well-being. We explore the benefits of a well-designed office and how it impacts your work-life balance.
          </p>
          <a href="/posts/second-post" className="text-blue-500 hover:text-blue-700 font-semibold">Read More</a>
        </div>

        {/* Card 3 */}
        <div className="card bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 animate-fadeInUp min-h-[350px]">
          <img src="images/22.jpg" alt="Second Deskify Blog Post" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Second Deskify Blog Post</h3>
          <p className="text-gray-600 mb-4">
            Our second blog post takes a deep dive into the world of sustainable office furniture. Deskify explores eco-friendly materials, energy-efficient designs, and how choosing sustainable office solutions can contribute to a greener planet. Make a positive impact on the environment without sacrificing style or comfort.
          </p>
          <a href="/posts/third-post" className="text-blue-500 hover:text-blue-700 font-semibold">Read More</a>
        </div>

        {/* Card 4 */}
        <div className="card bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 animate-fadeInUp min-h-[350px]">
          <img src="images/23.jpg" alt="Third Deskify Blog Post" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Third Deskify Blog Post</h3>
          <p className="text-gray-600 mb-4">
            In this post, we explore the latest trends in home office design. Deskify shares tips on how to create a functional and stylish workspace that boosts productivity and enhances creativity. From choosing the right desk to optimizing your office layout, we’ve got you covered.
          </p>
          <a href="/posts/fourth-post" className="text-blue-500 hover:text-blue-700 font-semibold">Read More</a>
        </div>

        {/* Card 5 */}
        <div className="card bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 animate-fadeInUp min-h-[350px]">
          <img src="images/24.jpg" alt="Fourth Deskify Blog Post" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fourth Deskify Blog Post</h3>
          <p className="text-gray-600 mb-4">
            In our fourth blog post, we discuss the importance of organizing your workspace for maximum efficiency. Deskify offers strategies to declutter your desk, streamline your workflow, and create a more organized and efficient work environment. Learn how small changes can make a big difference.
          </p>
          <a href="/posts/fifth-post" className="text-blue-500 hover:text-blue-700 font-semibold">Read More</a>
        </div>
      </div>

      {/* Additional Content - Stats Section */}
      <div className="mt-16 text-center bg-gradient-to-r from-[#D1D5DB] to-[#F3F4F6] p-8 rounded-lg">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Achievements at Deskify</h3>
        <div className="flex justify-center gap-12">
          <div className="stats-item text-center">
            <h4 className="text-5xl font-semibold text-blue-500">500+</h4>
            <p className="text-gray-600">Products Sold</p>
          </div>
          <div className="stats-item text-center">
            <h4 className="text-5xl font-semibold text-blue-500">1000+</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="stats-item text-center">
            <h4 className="text-5xl font-semibold text-blue-500">99%</h4>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Button to Explore More */}
      <div className="text-center mt-12">
        <a href="/posts/blogs" className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-flex items-center justify-center transition-all transform hover:bg-blue-600 hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
          </svg>
          Explore More Blogs
        </a>
      </div>
    </section>
  );
};

export default Card;
