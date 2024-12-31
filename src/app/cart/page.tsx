"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; // useRouter ke bajaye Link ka import
import { useRouter } from 'next/navigation';


const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const router = useRouter(); // To navigate and pass items to checkout

  useEffect(() => {
    const items = [
      { id: 1, name: 'Rustic Executive Desk', price: 100, image: '/images/3.jpg', quantity: 1 },
      { id: 2, name: 'Classic Office Setup', price: 150, image: '/images/4.jpg', quantity: 1 },
      { id: 3, name: 'Modern Workspace', price: 200, image: '/images/5.jpg', quantity: 1 },
      { id: 4, name: 'Industrial Kitchen Counter', price: 250, image: '/images/6.jpg', quantity: 1 },
      { id: 5, name: 'Elegant Wooden Office Desk', price: 300, image: '/images/7.jpg', quantity: 1 },
      { id: 6, name: 'Luxury Office with Aquarium', price: 350, image: '/images/8.jpg', quantity: 1 },
      { id: 7, name: 'Minimalist Office Setup', price: 400, image: '/images/9.jpg', quantity: 1 },
      { id: 8, name: 'Executive Wooden Office Desk', price: 450, image: '/images/10.jpg', quantity: 1 },
      { id: 9, name: 'Executive Wooden Desk', price: 500, image: '/images/11.jpg', quantity: 1 },
      { id: 10, name: 'Modern Office Setup', price: 550, image: '/images/12.jpg', quantity: 1 },
      { id: 11, name: 'Luxury Workspace with Shelving', price: 600, image: '/images/13.jpg', quantity: 1 },
      { id: 12, name: 'Classic Wooden Workspace', price: 650, image: '/images/14.jpg', quantity: 1 },
      { id: 13, name: 'Corporate Meeting Room Table', price: 700, image: '/images/15.jpg', quantity: 1 },
      { id: 14, name: 'Sophisticated Executive Desk', price: 750, image: '/images/16.jpg', quantity: 1 },
      { id: 15, name: 'Contemporary Office Design', price: 800, image: '/images/17.jpg', quantity: 1 },
      { id: 16, name: 'Sleek Office Desk with Storage', price: 1000, image: '/images/18.jpg', quantity: 1 },
    ];
    setCartItems(items);
    calculateTotal(items);
  }, []);

  const calculateTotal = (items: any[]) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (id: number, type: string) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        if (type === 'increase') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (type === 'decrease' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };
  return (
    <div className="text-left bg-black text-white relative">
      {/* Navbar */}
      <Navbar />

      {/* Background Images */}
      <img
        src="bg/10.jpg"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] absolute top-0 left-0 object-cover opacity-30 z-0"
        alt="Background"
      />
      <img
        src="bg/3.jpg"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] absolute bottom-20 left-0 object-cover opacity-30 z-0"
        alt="Background"
      />

      {/* Cart Section */}
      <section className="relative z-10 text-gray-300 text-center px-4 sm:px-10 md:px-16 lg:px-24 py-16">
        {/* Section Heading */}
        <div className="flex justify-center z-10 mt-20 sm:mt-32">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-full max-w-[350px] h-[87px] flex items-center justify-center bg-transparent border-4 text-white border-black" style={{ boxShadow: '10px 10px 20px #C1AA90' }}>
            Your Cart
          </h2>
        </div>

        {/* Cart Items */}
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-24 mt-12">
            {cartItems.map((item) => (
              <li key={item.id} className="grid border-b pb-4 w-full max-w-[350px] h-auto border-2 border-[#1D1915] rounded-lg bg-gradient-to-r from-black via-[#1D1915] to-black" style={{ boxShadow: '-20px -20px 28px #1D1915, 20px 20px 28px #C1AA90' }}>
                {/* Image */}
                <img src={item.image} alt={item.name} className="w-full px-3 py-3 h-[200px] sm:h-[250px] object-cover rounded-lg" />
                
                {/* Details */}
                <div className="px-4 py-2">
                  <span className="text-lg font-medium text-gray-200">{item.name}</span>
                  <p className="text-md font-semibold text-slate-400">${item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex justify-between items-center md:px-16 px-6 lg:px-20">
                  <button
                    className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-950"
                    onClick={() => handleQuantityChange(item.id, 'decrease')}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-950"
                    onClick={() => handleQuantityChange(item.id, 'increase')}
                  >
                    +
                  </button>
                </div>

                {/* Total and Remove Button */}
                <div className="px-4 py-2">
                  <div className="text-lg font-semibold text-gray-200">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </div>
        </AnimatePresence>

        {/* Total Price */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
        </div>

        {/* Checkout Button */}
        <div className="text-center mt-8">
          <Link
            href={{
              pathname: '/checkout',
              query: { cartItems: JSON.stringify(cartItems), totalPrice: totalPrice.toFixed(2) },
            }}
            className="px-6 py-3 bg-black rounded-full text-white shadow-md transform transition-all hover:bg-gray-950 hover:scale-105"
            style={{ boxShadow: '4px 4px 10px white' }}
          >
            Proceed to Checkout
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;