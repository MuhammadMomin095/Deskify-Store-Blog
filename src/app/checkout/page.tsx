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
    <div className="checkout-container">
      <h2>Checkout</h2>

      <form onSubmit={handleCheckout}>
        {/* Shipping Information */}
        <div className="shipping-information">
          <label>Name:</label>
          <input type="text" required />
          <label>Address:</label>
          <input type="text" required />
          <label>Phone Number:</label>
          <input type="tel" required />
        </div>

        {/* Payment Method */}
        <div className="payment-method">
          <label>Payment Method:</label>
          <select required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>Qty: {item.quantity}</span>
              <span>Price: ${item.price}</span>
              <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="total-price">
            <h4>Subtotal: ${totalPrice.toFixed(2)}</h4>
          </div>
        </div>

        {/* Place Order Button */}
        <button type="submit">Place Order</button>
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
