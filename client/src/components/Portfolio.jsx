// src/components/Portfolio.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'; // Import the CSS file

const Portfolio = () => {
  // Fetch portfolio data from the server or state
  const portfolio = {
    AAPL: 20,
    GOOGL: 15,
  };

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {Object.entries(portfolio).map(([symbol, quantity]) => (
          <li key={symbol}>{`${symbol}: ${quantity} shares`}</li>
        ))}
      </ul>
      <p>
        <Link to="/order-form">Place a new order</Link> | <Link to="/orders">View Orders</Link>
      </p>
    </div>
  );
};

export default Portfolio;
