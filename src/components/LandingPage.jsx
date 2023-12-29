// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Stock Market Web</h1>
      </header>
      <section>
        <div className='para-content'>
          <h4>
            Explore real-time stock market data and make informed investment decisions.
            Clients in over 200 countries and territories trade stocks, options, futures, currencies, bonds, funds, and more on 150 global markets from a single unified platform.
          </h4>
          <h2>
            Get started today and take control of your investments.<Link to="/login">Login</Link>
         </h2>
          
        </div>
        <div className='image-container'>
        <img src={require("../img/bg2.jpg")} alt="Stock Market Image" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
