import React from 'react';

const Contact = () => {
  return (
    <div className="text-left bg-black text-white relative py-24 px-32">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("images/20.jpg")' }}
      ></div>

    <section className="relative z-10">
    <div className="flex justify-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[450px] h-[87px] justify-center flex items-center bg-transparent border-4 text-white border-black" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            Contact Us
          </h2>
        </div>
      <p className="text-lg text-gray-100 text-shadow-lg mb-8 w-3/4 mx-auto mt-16">
        Have a question, feedback, or need assistance? We're here to help! Reach out to us through any of the methods below, and we'll get back to you as soon as possible.
      </p>

    

      {/* Contact Form */}
      <h3 className="text-3xl text-center text-white font-bold mt-12 mb-4">Get In Touch</h3>
      <form className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1" style={{ boxShadow: " 16px 16px 20px #C1AA90" }}>
          <input type="text" className="w-full p-4 text-black rounded-lg  shadow-md border border-gray-300" placeholder="Your Name" required />
        </div>
        <div className="col-span-1" style={{ boxShadow: " 16px 16px 20px #C1AA90" }}>
          <input type="email" className="w-full p-4 rounded-lg shadow-md border text-black border-gray-300" placeholder="Your Email" required />
        </div>
        <div className="col-span-2" style={{ boxShadow: " 16px 16px 20px #C1AA90" }}>
          <textarea className="w-full p-4 rounded-lg shadow-md border text-black border-gray-300 h-40" placeholder="Your Message" required></textarea>
        </div>
        <div className="col-span-2 text-center">
          <button type="submit" className="bg-black text-white font-bold py-3 px-6 rounded-full transition duration-300 " style={{ boxShadow: " 16px 16px 20px #C1AA90" }} >Send Message</button>
        </div>
      </form>

      {/* Social Media Links */}
      <div className="mt-12">
        <h4 className="text-2xl font-semibold text-center mb-4">Follow Us On Social Media</h4>
        <div className="flex justify-center gap-8">
          <a href="https://www.facebook.com/mominshykh.xx" target="_blank" className="text-2xl hover:text-blue-600 transition duration-300"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="https://www.instagram.com/mominshykh/?hl=en" target="_blank" className="text-2xl hover:text-pink-500 transition duration-300"><i className="fab fa-instagram"></i> Instagram</a>
          <a href="https://github.com/MuhammadMomin095" target="_blank" className="text-2xl hover:text-blue-400 transition duration-300"><i className="fab fa-twitter"></i> Github</a>
          <a href="https://www.linkedin.com/in/muhammad-momin-62069b2b9/" target="_blank" className="text-2xl hover:text-blue-700 transition duration-300"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>
    </section>
    </div>

  );
};

export default Contact;
