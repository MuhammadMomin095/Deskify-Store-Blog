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
    <div>
      <Navbar />
      <div className="products max-w-full mt-56 mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="motion-item bg-white hover:scale-105 shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.image} // Display product image
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-semibold text-gray-900 mb-4">{product.price}</p>
              <Link
                href={`/products/${product.id}`} // Correct template literal syntax for dynamic URL
                className="px-6 py-3 text-white bg-blue-500 rounded-lg transform transition-all hover:bg-blue-700"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
