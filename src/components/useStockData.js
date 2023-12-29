// useStockData.js
import { useState, useEffect } from 'react';

const useStockData = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const BaseUrl = "https://api.iex.cloud/v1";
  const token = "pk_85f727a2802d4a7d9de64485baeb569b";

  const fetchData = async (symbol) => {
    try {
      setLoading(true);
      const response = await fetch(`${BaseUrl}/data/core/iex_deep/${symbol}?token=${token}`);
      const data = await response.json();
      setStockData(data);
      console.log("data",data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { stockData, loading, error, fetchData };
};

export default useStockData;
