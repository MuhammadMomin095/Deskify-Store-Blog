import React from 'react';

const Contact = () => {
  return (
    <section className="contact mt-96 bg-gradient-to-r from-[#E5E7EB] to-[#F3F4F6] text-gray-900 py-20 text-center animate-fadeInUp shadow-lg hover:scale-105 transition-transform">
      <h2 className="text-5xl font-semibold mb-4" style={{ textShadow: '1px 1px 3px rgba(0, 255, 255, 0.5), -1px -1px 3px rgba(255, 255, 0, 0.5)' }}
>Contact Us</h2>
      <p className="text-lg text-shadow-lg mb-8 w-3/4 mx-auto">
        Have a question, feedback, or need assistance? We're here to help! Reach out to us through any of the methods below, and we'll get back to you as soon as possible.
      </p>

      {/* Contact Information */}
      <div className="flex flex-wrap justify-between items-center w-full max-w-6xl mx-auto">
        <div className="w-full md:w-1/3 text-left mb-8 md:mb-0">
          <h3 className="text-3xl font-medium mb-4">Headquarters</h3>
          <p className="text-lg">123 Deskify's Avenue, Karachi City, PAK</p>
          <p className="text-lg">Email: mominshykh7@gmail.com</p>
          <p className="text-lg">Phone: +92 315 230 9503</p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <div className="relative w-3/4 h-80 transform transition duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl">
            <img src="/images/Momin.jpg" alt="Contact Us" className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg" />
          </div>
        </div>
        <div className="w-full md:w-1/3 text-left md:pl-12">
          <h3 className="text-3xl font-medium mb-4">Working Hours</h3>
          <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-lg">Saturday: 10:00 AM - 4:00 PM</p>
          <p className="text-lg">Sunday: Closed</p>
        </div>
      </div>

      {/* Contact Form */}
      <h3 className="text-3xl font-medium mt-12 mb-4">Get In Touch</h3>
      <form className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <input type="text" className="w-full p-4 rounded-lg shadow-md border border-gray-300" placeholder="Your Name" required />
        </div>
        <div className="col-span-1">
          <input type="email" className="w-full p-4 rounded-lg shadow-md border border-gray-300" placeholder="Your Email" required />
        </div>
        <div className="col-span-2">
          <textarea className="w-full p-4 rounded-lg shadow-md border border-gray-300 h-40" placeholder="Your Message" required></textarea>
        </div>
        <div className="col-span-2">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">Send Message</button>
        </div>
      </form>

      {/* Social Media Links */}
      <div className="mt-12">
        <h4 className="text-2xl font-semibold mb-4">Follow Us On Social Media</h4>
        <div className="flex justify-center gap-8">
          <a href="https://www.facebook.com/mominshykh.xx" target="_blank" className="text-2xl hover:text-blue-600 transition duration-300"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="https://www.instagram.com/mominshykh/?hl=en" target="_blank" className="text-2xl hover:text-pink-500 transition duration-300"><i className="fab fa-instagram"></i> Instagram</a>
          <a href="https://github.com/MuhammadMomin095" target="_blank" className="text-2xl hover:text-blue-400 transition duration-300"><i className="fab fa-twitter"></i> Github</a>
          <a href="https://www.linkedin.com/in/muhammad-momin-62069b2b9/" target="_blank" className="text-2xl hover:text-blue-700 transition duration-300"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
