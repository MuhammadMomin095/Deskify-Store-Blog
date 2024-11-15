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
    <div>
      <Navbar />
      <div className="products max-w-full mt-56 mx-auto p-6 bg-white shadow-lg rounded-lg">
        {product && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-4/5 rounded-full h-80 transform transition duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>
              <p className="text-2xl font-semibold text-gray-900 mb-6">{product.price}</p>
              <div className="text-center">
                <Link
                  href="/products"
                  className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md transform transition-all hover:bg-blue-700 hover:scale-105"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
