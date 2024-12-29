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
    <div className="hero text-left bg-black text-white relative py-32 px-32">
    <img
      src="images/20.jpg"
      className="w-full absolute top-0 left-0 object-cover opacity-30"
    />
      {/* Cart Section */}
      <section className="">
        <div className="mx-auto max-w-4xl px-4 relative z-10 text-gray-300 text-center">
        <div className="flex justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[450px] h-[87px] justify-center flex items-center bg-transparent border-4 text-white border-black" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            Your Shopping Cart
          </h2>
        </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between  items-center mb-6 transform transition-transform hover:scale-105 animate-slideInUp bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] p-6 rounded-lg shadow-md hover:shadow-xl mt-16" style={{ boxShadow: "-20px -20px 28px #C1AA90, 20px 20px 28px #C1AA90" }}
            >
              {/* Product Image */}
              <div className="w-20 h-20 mr-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
              </div>

              {/* Product Info */}
              <div className="flex-1 text-left">
                <span className="text-lg text-white font-semibold">{item.name}</span>
                <p className="text-sm text-[#C1AA90] mt-2">{item.description}</p>
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

                <span className="mx-4 text-[#C1AA90]">{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-3 py-1 bg-[#10B981] text-white rounded hover:bg-[#16A34A] transition"
                >
                  +
                </button>
              </div>

              <span className="text-lg font-semibold text-[#C1AA90]">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="mt-10 text-xl font-semibold text-gray-200">
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </div>

          <div className="mt-4 text-lg text-gray-300">
            <p>Shipping and taxes calculated at checkout.</p>
            <p>Use code <strong>DISCOUNT10</strong> for 10% off your order!</p>
          </div>

          {/* Go to Cart Button */}
          <a
            href="/cart"
            className="mt-6 inline-block text-gray-200 hover:text-[#60A5FA] text-lg font-semibold text-shadow-lg transition"
          >
            Go to Cart
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cart;
