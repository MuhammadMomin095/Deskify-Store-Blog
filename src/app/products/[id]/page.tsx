'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For animation

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get the ID from URL params
  const [product, setProduct] = useState<Product | null>(null);

  const productId = typeof id === 'string' ? parseInt(id, 10) : null;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };
  
    if (productId !== null) {
      fetchProduct();
    }
  }, [productId]);

  return (
    <div className="text-left bg-black text-white relative">
      {/* Navbar */}
      <Navbar />
      
      {/* Background Image */}
      <img
        src="/images/aa.jpg"
        className="w-full absolute top-0 left-0 object-cover opacity-20 z-0"  
      />

      <section className="relative z-10 text-gray-300 text-center py-12 md:py-48 px-6 md:px-28">
        {product && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-4/5 md:w-3/4 lg:w-2/3 rounded-3xl h-auto transform transition duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
                style={{ boxShadow: '20px 20px 32px #C1AA90' }}
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left">
              <h1 className="text-2xl md:text-3xl text-white font-bold mb-4">{product.name}</h1>
              <p className="text-base md:text-lg text-gray-200 mb-6">{product.description}</p>
              <p className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">{product.price}</p>
              <div className="text-center md:text-left">
                <Link
                  href="/products"
                  className="px-6 py-3 text-white bg-black rounded-full shadow-md transform transition-all hover:bg-gray-950 hover:scale-105"
                  style={{ boxShadow: "4px 4px 10px white" }}
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
