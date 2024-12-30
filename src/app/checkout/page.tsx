'use client'; 
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';

const Checkout = () => {
  const searchParams = useSearchParams();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const cartItemsParam = searchParams.get('cartItems');
    const totalPriceParam = searchParams.get('totalPrice');
    
    if (cartItemsParam && totalPriceParam) {
      try {
        const items = JSON.parse(cartItemsParam);
        setCartItems(items);
        setTotalPrice(parseFloat(totalPriceParam));
      } catch (error) {
        console.error("Error parsing query parameters:", error);
      }
    }
  }, [searchParams]);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout-container bg-gradient-to-r from-[#C1AA90] via-[#b4a999] to-[#C1AA90]">
       <div className="flex justify-center z-10 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[350px] h-[87px] justify-center flex items-center bg-transparent border-4 text-black border-black " style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
          Checkout
          </h2>
        </div>

      <form onSubmit={handleCheckout}>
        {/* Shipping Information */}
        <div className="shipping-information ">
          <label className='text-gray-700'>Name:</label>
          <input className='mt-2' type="text" required />
          <label className='text-gray-700'>Address:</label>
          <input className='mt-2' type="text" required />
          <label className='text-gray-700'>Phone Number:</label>
          <input className='mt-2' type="tel" required />
        </div>

        {/* Payment Method */}
        <div className="payment-method">
          <label className='text-gray-700'>Payment Method:</label>
          <select className='mt-2' required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        {/* Order Summary */}
        <div>
          <div className='flex items-center justify-center py-10'>
          <h3 className='text-2xl text-gray-900 font-semibold'>Order Summary</h3>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item space-x-40  mt-2 text-gray-200">
              <span className='font-bold text-lg text-white bg-gray-700 rounded-lg px-6 py-3'>{item.name}</span>
              <div className='py-10 space-x-20'>
              <span className='text-gray-700'>Qty: {item.quantity}</span>
              <span className='text-gray-700'>Price: ${item.price}</span>
              <span className='text-gray-700'>Total: ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
            </div>
          ))}
          <div >
          <div className='flex items-center justify-center py-10'>
            <h4 className='text-2xl text-gray-900 font-semibold'>Subtotal: ${totalPrice.toFixed(2)}</h4>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <div className='justify-center flex items-center'>
        <button
        className="px-6 py-3 bg-black rounded-full text-white shadow-md transform transition-all hover:bg-gray-950 hover:scale-105"  style={{ boxShadow: " 4px 4px 10px white" }} type="submit">
          Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Checkout />
    </Suspense>
  );
}
