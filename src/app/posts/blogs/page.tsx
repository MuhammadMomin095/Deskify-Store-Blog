import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blogs = () => {
  return (
    <div>
      { /* Navbar */}
      <Navbar />

      <div className="blogs max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-64 animate__animated animate__fadeInUp">
        {/* Post Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
          Latest Blog Posts
        </h1>

        {/* Blog Post 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>How Ergonomic Office Furniture Can Boost Productivity</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Deskify, we believe that the right office furniture can improve both comfort and productivity. Explore how ergonomic chairs and desks can help you stay focused and work efficiently throughout the day.
          </p>
          <a href="/posts/first-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>The Best Office Desk Styles for Small Spaces</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Don’t let a small office space limit your productivity. Discover Deskify’s range of compact desks and smart storage solutions that maximize space while keeping your workspace organized and stylish.
          </p>
          <a href="/posts/second-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>How to Choose the Perfect Office Chair for Your Workspace</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Your office chair plays a critical role in your daily comfort and health. Learn how to choose the perfect ergonomic chair that supports your back, neck, and posture while working long hours.
          </p>
          <a href="/posts/third-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 4 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>The Importance of Adjustable Desks in Today’s Workplace</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Adjustable desks are not just a trend—they’re a necessity for modern offices. Discover the benefits of sit-stand desks and how they can improve your health and productivity by allowing you to switch between sitting and standing.
          </p>
          <a href="/posts/fourth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 5 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>How to Create a Comfortable Home Office</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Working from home doesn’t mean sacrificing comfort. Learn how to create a cozy, productive home office with Deskify’s ergonomic furniture and stylish office accessories.
          </p>
          <a href="/posts/fifth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 6 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>Top Office Furniture Trends for 2024</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Stay ahead of the curve with the latest office furniture trends for 2024. From sustainable materials to multifunctional designs, discover how you can modernize your office space.
          </p>
          <a href="/posts/sixth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 7 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>Why Investing in Quality Office Furniture Pays Off</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Office furniture is more than just a functional item—it’s an investment in your well-being. Learn why choosing quality office furniture from Deskify can improve your posture, productivity, and overall health.
          </p>
          <a href="/posts/seventh-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 8 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>Creating a Stylish Office with Deskify’s Modern Furniture Collection</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Looking to create a stylish and functional office space? Check out Deskify’s collection of modern office furniture, perfect for adding a professional touch to any workspace.
          </p>
          <a href="/posts/eighth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 9 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>How Custom Office Furniture Can Reflect Your Brand</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Custom office furniture can help reflect your company’s identity. Discover how Deskify’s bespoke furniture solutions can help you create a unique workspace that aligns with your brand’s values and image.
          </p>
          <a href="/posts/ninth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 10 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>The Benefits of Adjustable Lighting for Your Office</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Lighting can make or break the atmosphere in your office. Learn why adjustable lighting is essential for creating the right ambiance while ensuring proper visibility and reducing eye strain.
          </p>
          <a href="/posts/tenth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 11 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>Maximizing Small Office Spaces with the Right Furniture</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Small office spaces don’t have to feel cramped. Learn how to maximize your workspace with space-saving office furniture that combines both style and functionality.
          </p>
          <a href="/posts/eleventh-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 12 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>Building an Eco-Friendly Office with Sustainable Furniture</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Going green has never been easier! Explore how Deskify’s sustainable office furniture can help you create an eco-friendly workspace that’s both stylish and responsible.
          </p>
          <a href="/posts/twelfth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 13 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>How to Create a Productive Home Office with Deskify</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Learn how Deskify’s ergonomic and stylish furniture solutions can help you set up a home office that boosts productivity while keeping you comfortable all day long.
          </p>
          <a href="/posts/thirteenth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 14 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>How to Choose the Right Office Storage Solutions</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A clutter-free workspace leads to greater productivity. Explore the best office storage solutions from Deskify, designed to keep your documents, equipment, and supplies organized.
          </p>
          <a href="/posts/fourteenth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 15 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>The Role of Office Furniture in Employee Wellbeing</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Discover how the right office furniture plays a significant role in improving employee health and well-being. Learn how ergonomic desks and chairs can help prevent workplace injuries.
          </p>
          <a href="/posts/fifteenth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>

        {/* Blog Post 16 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>Innovative Workspace Solutions for Modern Offices</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Discover innovative office furniture solutions that help create more flexible, collaborative, and dynamic work environments, enabling teams to work better together.
          </p>
          <a href="/posts/sixteenth-post" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blogs;
