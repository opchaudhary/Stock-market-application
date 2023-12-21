// // useStockData.js
// import { useState, useEffect } from 'react';

// const useStockData = (symbol) => {
//   const [stockData, setStockData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const BaseUrl = "https://api.iex.cloud/v1";
//   const token = "pk_8e0ab2b9f4474c1eae488683e98feea1";
//   //   https://api.iex.cloud/v1/data/core/iex_deep/aapl?token=pk_8e0ab2b9f4474c1eae488683e98feea1
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${BaseUrl}/data/core/iex_deep/aapl?token=${token}`);
//         const data = await response.json();
//         setStockData(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [symbol]);

//   return { stockData, loading, error };
// };

// export default useStockData;

// useStockData.js
import { useState, useEffect } from 'react';

const useStockData = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const BaseUrl = "https://api.iex.cloud/v1";
  const token = "pk_8e0ab2b9f4474c1eae488683e98feea1";

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
