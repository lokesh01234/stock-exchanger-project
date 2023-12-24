// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Mock Exchange</h1>
      <p>Connect to the exchange and manage your orders and portfolio.</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
