'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Use Framer Motion for animations

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch all products data from the API
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set the products state
      })
      .catch((err) => {
        console.error('An error occurred while fetching products:', err);
      });
  }, []);

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
  


      
    <section className="relative z-10 text-gray-300 text-center py-24">
       {/* Section Heading */}
       <div className="flex justify-center z-10 mt-32">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[350px] h-[87px] justify-center flex items-center bg-transparent border-4 text-white border-black" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            Our Product
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-14 mt-20" >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="motion-item hover:scale-105 shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out w-full bg-gradient-to-r from-black via-[#1D1915] to-black"style={{ boxShadow: "-20px -20px 28px #1D1915, 20px 20px 28px #C1AA90" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.image} // Display product image
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-100 mb-4">{product.name}</h2>
              <p className="text-sm text-gray-200 mb-4">{product.description}</p>
              <p className="text-lg font-semibold text-gray-300 mb-4">{product.price}</p>
              <Link
                href={`/products/${product.id}`} // Correct template literal syntax for dynamic URL
                className="px-6 py-3 text-white bg-[#1D1915] rounded-full transform transition-all"  style={{ boxShadow: " 4px 4px 10px #C1AA90" }}
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
