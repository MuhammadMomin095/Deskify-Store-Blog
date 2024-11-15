import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const heading = document.querySelector('.word');
    const text = heading?.textContent;
    if (heading && text) {
      heading.innerHTML = ''; // Empty the heading text

      // Split the text into words
      const words = text.split(' ');
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('word-span'); // Add a class for each word
        wordSpan.style.animationDelay = `${index * 0.5}s`; // Delay for each word
        wordSpan.style.display = 'inline-block'; // Make sure words are inline-block
        
        // Split the word into letters and add animation to each letter
        word.split('').forEach((letter, letterIndex) => {
          const letterSpan = document.createElement('span');
          letterSpan.classList.add('letter', 'animate-fadeInLetter'); // Add animation class
          letterSpan.style.animationDelay = `${index * 0.5 + letterIndex * 0.1}s`; // Delay for each letter
          letterSpan.textContent = letter;
          wordSpan.appendChild(letterSpan); // Append letter span to word span
        });
        
        heading.appendChild(wordSpan); // Append word span to heading
        
        // Add a space after each word (except after "Workspace")
        if (word !== 'Workspace') {
          heading.appendChild(document.createTextNode(' '));
        } else {
          // If the word is "Workspace", create a new span for the space and force a new line
          const newLine = document.createElement('span');
          newLine.style.display = 'inline-block'; // Keep "Workspace" on the same line
          heading.appendChild(newLine);
        }
      });
    }
  }, []);

  return (
    <section className="hero bg-gradient-to-r from-[#e0e1e3] to-[#E5E7EB] text-gray-900 py-20 text-center mt-72 shadow-lg rounded-lg hover:scale-105 transition-transform">
      <div className="container mx-auto px-6">
        <h1 className="word text-6xl text-shadow-lg font-bold mb-6 animate-fadeInDown"style={{ textShadow: '2px 2px 5px rgba(0, 0, 255, 0.6), -2px -2px 5px rgba(255, 0, 0, 0.6)' }}


>
          Welcome to Deskify - Your Organized Workspace
        </h1>

        <p className="text-xl mb-10 text-shadow text-gray-700 animate-fadeInUp">
          Discover the best products to transform your workspace into an organized, productive environment. Stay updated with our blog for workspace tips and latest trends!
        </p>

        <div className="flex justify-center text-shadow space-x-6 mb-10 animate-fadeInUp delay-200">
          <a href="/products" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-300 ease-in-out">
            Shop Workspace Products
          </a>
          <a href="/posts/blogs" className="bg-yellow-500 text-shadow text-white px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300 ease-in-out">
            Read Our Blog
          </a>
        </div>

      {/* Image Section */}
      <div className="flex justify-center mb-12">
        <div className="image-container relative w-64 h-64 transform transition duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl overflow-hidden rounded-full">
          <img src="images/19.jpg" alt="Deskify" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110 hover:rotate-6" />
        </div>
      </div>

        <div className="mt-16">
          <h2 className="text-3xl text-shadow font-semibold mb-4 animate-fadeInUp delay-400">What Our Customers Are Saying</h2>
          <p className="text-lg text-gray-600 text-shadow animate-fadeInUp delay-500">
            "Deskify’s products transformed my workspace into a productivity haven!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
