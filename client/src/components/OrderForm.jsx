// src/components/OrderForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderForm.css'; // Import the CSS file

const OrderForm = () => {
  const [symbol, setSymbol] = useState('');
  const [orderType, setOrderType] = useState('buy');
  const [quantity, setQuantity] = useState(0);

  const handlePlaceOrder = () => {
    // Implement order placement logic here
    alert(`Order placed for ${quantity} shares of ${symbol} (${orderType})`);
  };

  return (
    <div className="order-form">
      <h2>Place Order</h2>
      <input
        type="text"
        placeholder="Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handlePlaceOrder}>Place Order</button>
      <p>
        <Link to="/orders">View Orders</Link> | <Link to="/portfolio">View Portfolio</Link>
      </p>
    </div>
  );
};

export default OrderForm;
