import React, { useState } from 'react';
import Highcharts from 'highcharts';
import './MainDashboard.css';
import News from './News';
import CompanyData from './CompanyData';

const MainDashboard = () => {
  const [comp, setComp] = useState('aapl');
  const [company, setCompany] = useState([]);
  const [tradeData, setTradeData] = useState([]);
  const [data, setData] = useState();
  const token = 'pk_85f727a2802d4a7d9de64485baeb569b';
  const BaseUrl= 'https://api.iex.cloud/v1';

  const handleSearch = async () => {
    try {
      const companyResponse = await fetchCompanyData(comp);
      setCompany(companyResponse);

      const tradeResponse = await fetchCompanyTrade(comp);
      setTradeData(tradeResponse);
      console.log(tradeResponse);

      setData(tradeResponse);
      console.log(data)

      chart();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCompanyData = async (symbol) => {
    const response = await fetch(
      `${BaseUrl}/data/core/company/${symbol}?token=${token}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  const fetchCompanyTrade = async (symbol) => {
    const response = await fetch(
      `${BaseUrl}/data/core/iex_deep/${symbol}?token=${token}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const tradePrices = data && data[0] && data[0].trades
  ? data[0].trades.map((trade) => trade.price)
  : [];
console.log("tradePrice: ", tradePrices);

const tradeTime = data && data[0] && data[0].trades
  ? data[0].trades.map((trade) => trade.timestamp)
  : [];
console.log("timestamp: ", tradeTime);

const convertTimestampToTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  };
  
  // Example usage
  const timestamps = tradeTime;
  ;
  
  const readableTimes = timestamps.map(convertTimestampToTime);
  console.log(readableTimes);
  

const chart = () => {
  Highcharts.chart('chart', {
      title: {
          text: " Trade's Line Chart",
          style: {
              color: 'violet',
          },
      },
      chart: {
          color: 'blue'

      },
      xAxis: {
          labels: {
              style: {
                  color: 'black',
              },
          },
          title: {
              text: 'TimeStamp ',
          },
      },
   xAxis: {
          categories: readableTimes,
      },

      yAxis: {
          labels: {
              style: {
                  color: 'black'
              },
          },
          title: {
              text: 'Price ',
          },
      },
      series: [
          {
              name: 'Series 1',
              data: tradePrices

          },
          // {
          //     name: 'Series 2',
          //     color: 'red',
          //     data: tradePrices2

          // },
      ],



  });
};

  return (
    <div className="dashboard">
      <div>
        <input
          type="text"
          value={comp}
          onChange={(e) => setComp(e.target.value)}
          placeholder="Enter stock symbol"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="dashboard-container">
        <div className="left-dashboard">
          <CompanyData company={company} />
        </div>
        <div className="right-dashboard">
          <div className="news-panel">
            <News />
          </div>
        </div>
      </div>

      <div id="chart" style={{ width: '95%', height: '50%', padding: '5px', margin: 'auto' }}></div>
    </div>
  );
};

export default MainDashboard;
