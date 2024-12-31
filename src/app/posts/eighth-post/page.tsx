import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog8 = () => {
  return (
    <div className="text-left bg-black text-white relative">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <img
        src="/images/aa.jpg"
        className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] absolute top-0 left-0 object-cover opacity-30 z-0"
        alt="Background"
      />

      {/* Content Section */}
      <section className="relative z-10 text-gray-300 text-center px-6 sm:px-10 md:px-16 lg:px-40 py-16">
        {/* Section Heading */}
        <div className="flex justify-center z-10 mt-20 sm:mt-32">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 text-gray-100 justify-center flex items-center bg-transparent">
            How to Choose the Right Lighting for Your Home Office
          </h2>
        </div>

        {/* Paragraphs */}
        <div className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed space-y-4">
          <p>
            Lighting plays a crucial role in setting the right mood and boosting productivity in your home office. Whether you’re working on a laptop or taking a call, the right lighting can help reduce eye strain and create a focused environment.
          </p>
          <p>
            Opt for adjustable task lighting, such as desk lamps with dimming options, to give you control over the intensity of light. Additionally, overhead lighting should be soft but bright enough to illuminate your workspace effectively.
          </p>
          <p>
            Incorporating natural light into your home office setup is also essential. Position your desk near a window to take advantage of daylight and enhance your mood and focus.
          </p>
          <p>
            With the right lighting, you can create a comfortable, productive home office space that fosters creativity and reduces fatigue.
          </p>
        </div>

        {/* Back to Blogs */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="/posts/blogs"
            className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center justify-center transition-all transform hover:scale-105"
            style={{ boxShadow: '4px 4px 10px white' }}
          >
            Back to Blogs
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog8;
