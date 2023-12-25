import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const Chart = ({ tradePrices, tradeTime }) => {
  useEffect(() => {
    Highcharts.chart('chart', {
      title: {
        text: "Trade's Line Chart",
        style: {
          color: 'violet',
        },
      },
      chart: {
        color: 'blue',
      },
      xAxis: {
        labels: {
          style: {
            color: 'black',
          },
        },
        title: {
          text: 'TimeStamp',
        },
        categories: tradeTime,
      },
      yAxis: {
        labels: {
          style: {
            color: 'black',
          },
        },
        title: {
          text: 'Price',
        },
      },
      series: [
        {
          name: 'Series 1',
          data: tradePrices,
        },
        // Add more series as needed
      ],
    });
  }, [tradePrices, tradeTime]);

  return <div id="chart" style={{ width: '100%', height: '300px' }}></div>;
};

export default Chart;
