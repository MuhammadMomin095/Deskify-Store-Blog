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
    <div className="text-left bg-black text-white relative">
      {/* Navbar */}
      <Navbar />

     {/* Background Image */}
    <img
      src="bg/10.jpg"
      className="w-full  absolute top-0 left-0 object-cover opacity-30 z-0"  
    />
     <img
      src="bg/3.jpg"
      className="w-full  absolute bottom-20 left-0 object-cover opacity-30 z-0"  
    />
 
    
    
    
    {/* Container for Logo and Menu */}
  


      
    <section className="relative z-10 text-gray-300 text-center py-16">
       {/* Section Heading */}
       <div className="flex justify-center z-10 mt-32">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[350px] h-[87px] justify-center flex items-center bg-transparent border-4 text-white border-black " style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
          Your Cart
          </h2>
        </div>

        <AnimatePresence>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-40 mt-12'>
    {cartItems.map((item) => (
      <li key={item.id} className="grid border-b pb-4  h-[650px] border-2 border-[#1D1915] rounded-lg  bg-gradient-to-r from-[#1D1915] via-[#9c8973] to-[#1D1915]" style={{ boxShadow: "-20px -20px 28px #1D1915, 20px 20px 28px #C1AA90" }}>
        {/* Left Section: Image and Details */}
        <div className=" space-x-4 w-full">
          <img src={item.image} alt={item.name} className="w-full px-4 py-5 h-380 object-cover rounded-lg" />
          </div>
          <div>
            <span className="text-xl font-medium text-gray-200">{item.name}</span>
            <p className="text-lg font-semibold text-slate-950">${item.price}</p>
          </div>
        

        {/* Center Section: Quantity Controls */}
        <div className="space-x-4">
          <button
            className="px-2 py-1 bg-gray-900 rounded hover:bg-gray-950"
            onClick={() => handleQuantityChange(item.id, 'decrease')}
          >
            -
          </button>
          <span className="text-lg">{item.quantity}</span>
          <button
            className="px-2 py-1 bg-gray-900 rounded hover:bg-gray-950"
            onClick={() => handleQuantityChange(item.id, 'increase')}
          >
            +
          </button>
        </div>

        {/* Right Section: Total Price */}
        <div className="text-lg font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </div>

        {/* Remove Button */}
        <button
          className="text-red-600 hover:text-red-800"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
      </li>
    ))}
  </div>
</AnimatePresence>


        <div className="mt-16 ">
          <h3 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
        </div>

        {/* Checkout Button */}
        <div className="text-center mt-20">
          <div>
            <Link href={{
              pathname: "/checkout",
              query: { cartItems: JSON.stringify(cartItems), totalPrice: totalPrice.toFixed(2) }
            }} className="px-6 py-3 bg-black rounded-full text-white shadow-md transform transition-all hover:bg-gray-950 hover:scale-105"  style={{ boxShadow: " 4px 4px 10px white" }}>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </section>
      
    </div>
    <Footer />
   </div>
  );
};

export default Cart;
