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
          <h4 color='yellow'>
            Explore real-time stock market data and make informed investment decisions.
            The stock market guarantees all interested market participants have access to data for all buy and sell orders, thereby helping in the fair and transparent pricing of securities. The market also ensures efficient matching of appropriate buy and sell orders.
            Stock markets need to support price discovery where the price of any stock is determined collectively by all of its buyers and sellers. Those qualified and willing to trade should get instant access to place orders and the market ensures that the orders are executed at a fair price.
            Clients in over 200 countries and territories trade stocks, options, futures, currencies, bonds, funds, and more on 150 global markets from a single unified platform.
          </h4>
          <h2>
            Get started today and take control of your investments.<Link to="/login">Login</Link>
          </h2>

        </div>
        <div className='image-container'>
          <img src={require("../img/bg2.jpg")} alt="Stock Market Image" style={{
            padding: 100
          }} />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
