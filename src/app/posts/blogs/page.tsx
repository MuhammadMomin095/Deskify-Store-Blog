

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";
import Link from 'next/link';
import React, { useState } from 'react';


const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Cart', path: '/cart' },
  { name: 'Products', path: '/products' },
  { name: 'Blogs', path: '/posts/blogs' },
];



export default async function Blogs () {
  const data = await client.fetch(`*[_type == "blog"]`);
  console.log(data);

  


  


  return (
    <div className="text-left bg-black text-white relative">
      <Navbar />
    {/* Background Image */}
    <img
      src="/bg/3.jpg"
      className="w-full  absolute top-0 left-0 object-cover opacity-50 z-0"  
    />
     <img
    src="/bg/9.jpg"
    className="w-full  absolute bottom-0 left-0 object-cover opacity-30 z-0"  
  />
    
    {/* Container for Logo and Menu */}
  


      
    <section className="relative z-10 text-gray-300 text-center py-48">
       {/* Section Heading */}
       <div className="flex justify-center z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[350px] h-[87px] justify-center flex items-center bg-transparent border-4 text-white border-black" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            Deskify Blogs
          </h2>
        </div>



    <div className="flex flex-wrap justify-center items-center mt-28  gap-8  z-10">
          {data.map((blog: any, index: number) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center gap-2 w-[300px] bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915]  h-[750px] border-black border-2  z-10"style={{ boxShadow: "-20px -20px 28px #C1AA90, 20px 20px 28px #C1AA90" }}
              >
                {blog.image?.asset && (
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={urlFor(blog.image).url()}
                      alt={blog.name}
                      className="w-full h-full px-3 py-3 object-cover "
                    />
                  </div>
                )}
               <p className="text-xl mt-14 pl-3 pr-3 font-bold  text-white">
                  {blog.heading}
                </p>
                <p className="text-xl pl-3 pr-3 font-medium  text-white">
                  {blog.para}
                </p>



                <div className="items-start flex mt-4 ">
                <a
                  href={blog.read} 
                  className="text-blue-600 hover:text-blue-800"
                  >
                  Read More
                  </a>
                </div>




              </div>
            ))}
          
          </div>
          <div/>
          </section>
 
      {/* Footer */}
      <Footer />
      </div>
  );
};

