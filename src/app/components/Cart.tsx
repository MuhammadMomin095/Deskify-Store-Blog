import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1, description: 'This is a great product for your daily needs.', image: 'images/3.jpg' },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 2, description: 'Affordable and durable, ideal for all ages.', image: 'images/4.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, quantity: 1, description: 'Premium quality with excellent reviews.', image: 'images/5.jpg' },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };

  return (
    <div>
      {/* Cart Section */}
      <section className="carts mt-96 bg-gradient-to-r from-[#E5E7EB] to-[#F3F4F6] py-12 hover:shadow-xl shadow-lg hover:scale-105 transition-all duration-300">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <h2 className="text-5xl font-semibold text-black mb-6 text-shadow-lg " style={{ textShadow: '1px 1px 3px rgba(0, 255, 255, 0.5), -1px -1px 3px rgba(255, 255, 0, 0.5)' }}
>
            Your Shopping Cart
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-6 transform transition-transform hover:scale-105 animate-slideInUp bg-white p-6 rounded-lg shadow-md hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="w-20 h-20 mr-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
              </div>

              {/* Product Info */}
              <div className="flex-1 text-left">
                <span className="text-lg font-semibold">{item.name}</span>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>

              {/* Quantity and Price */}
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity === 1}
                  className="px-3 py-1 bg-[#EF4444] text-white rounded hover:bg-[#DC2626] transition"
                >
                  -
                </button>

                <span className="mx-4">{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-3 py-1 bg-[#10B981] text-white rounded hover:bg-[#16A34A] transition"
                >
                  +
                </button>
              </div>

              <span className="text-lg font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="mt-6 text-xl font-semibold text-black">
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </div>

          <div className="mt-4 text-lg text-gray-600">
            <p>Shipping and taxes calculated at checkout.</p>
            <p>Use code <strong>DISCOUNT10</strong> for 10% off your order!</p>
          </div>

          {/* Go to Cart Button */}
          <a
            href="/cart"
            className="mt-6 inline-block text-black hover:text-[#60A5FA] text-lg font-semibold text-shadow-lg transition"
          >
            Go to Cart
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cart;
