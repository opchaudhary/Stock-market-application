import React, { useEffect, useState } from 'react';
import useStockData from './useStockData';
import './SearchStock.css'

const StockSearch = () => {
  const [symbol, setSymbol] = useState('AAPL');
  const { stockData, loading, error, fetchData } = useStockData();

  const handleSearch = () => {
    // Call fetchData with the entered symbol
    fetchData(symbol);
  };
  const renderTable = () => {
    if (!stockData) return null;
  
    return (
      <div className='StockTable'>
        <h2>Table: Stock Data</h2>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Market Percent</th>
              <th>Volume</th>
              <th>Last Sale Price</th>
              <th>Last Sale Size</th>
              <th>Last Sale Time</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((stock, index) => (
              <tr key={index}>
                <td>{stock.symbol}</td>
                <td>{stock.marketPercent}</td>
                <td>{stock.volume}</td>
                <td>{stock.lastSalePrice}</td>
                <td>{stock.lastSaleSize}</td>
                <td>{new Date(stock.lastSaleTime).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {stockData.map((stock, index) => (
          <div key={index}>
            <h2>Table: Bids for {stock.symbol}</h2>
            <table>
              <thead>
                <tr>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {stock.bids.map((bid, bidIndex) => (
                  <tr key={bidIndex}>
                    <td>{bid.price}</td>
                    <td>{bid.size}</td>
                    <td>{new Date(bid.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            <h2>Table: Asks for {stock.symbol}</h2>
            <table>
              <thead>
                <tr>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {stock.asks.map((ask, askIndex) => (
                  <tr key={askIndex}>
                    <td>{ask.price}</td>
                    <td>{ask.size}</td>
                    <td>{new Date(ask.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter stock symbol"
        />
        <button onClick={handleSearch}>Search</button>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {renderTable()}
    </div>
  );
};
export default StockSearch;
