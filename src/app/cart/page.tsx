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
    <div>
      <Navbar />
      <motion.div
        className="cart-container px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>Your Cart</h2>

        <AnimatePresence>
          {cartItems.map((item) => (
            <motion.li key={item.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <span className="text-xl font-medium text-gray-800">{item.name}</span>
                  <p className="text-lg font-semibold text-green-500">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                <span className="text-lg">{item.quantity}</span>
                <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
              </div>

              <div className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</div>

              <button className="text-red-600 hover:text-red-800" onClick={() => removeItem(item.id)}>Remove</button>
            </motion.li>
          ))}
        </AnimatePresence>

        <div className="mt-8 text-right">
          <h3 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
        </div>

        {/* Checkout Button */}
        <div className="text-center mt-6">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href={{
              pathname: "/checkout",
              query: { cartItems: JSON.stringify(cartItems), totalPrice: totalPrice.toFixed(2) }
            }} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md transform transition-all hover:bg-blue-700 hover:scale-105">
              Proceed to Checkout
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Cart;
