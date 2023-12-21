import React, { useEffect,useState } from 'react';
import Highcharts from 'highcharts'
import './Dashboard.css'

const Dashboard = () => {

  const [data,setData] = useState();

  const fetchCompanytechnical  = () => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.iex.cloud/v1/data/core/advanced_stats/msft?token=pk_ddeddb3e6e0c4da8b1211716c064c37e');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    console.log("data->"+data)

  }
  const chart = () =>{


    Highcharts.chart('ch', {
      title: {
        text: 'Line Chart',
        style: {
          color: '#FFF'
        }
      },
      chart: {
        backgroundColor: '#0b1d33'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      xAxis: {
        labels: {
          style: {
            color: '#FFF'
          }
        },
        title: {
          text: 'X Axis'
        }
      },
      yAxis: {
        labels: {
          style: {
            color: '#FFF'
          }
        },
        title: {
          text: 'Values'
        }
      },
      series: [{
        name: 'Series 1',
        data: [10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120, 10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120, 10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120, 10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120]
      }]
    });
  }


  useEffect(() => {
    fetchCompanytechnical();
    chart()
  }, []);
  return (
    <div className='dashboard'>
      <div className="dashboard-container">
        <div className="left-dashboard">
          <div className="heading-container">
            <h1>APL Apollo Tubes Ltd</h1>
          </div>
          <div className="table-container">
            <div className="left-table">
              <ul>
                <li>Market Cap₹ 43,486 Cr.</li>
                <li>ROCE 27.0 %</li>
                <li>Stock P/E 75.2</li>
              </ul>
            </div>
            <div className="center-table">
              <ul>
                <li>Market Cap₹ 43,486 Cr.</li>
                <li>ROCE 27.0 %</li>
                <li>Stock P/E 75.2</li>
              </ul>
            </div>
            <div className="right-table">
              <ul>
                <li>Market Cap₹ 43,486 Cr.</li>
                <li>ROCE 27.0 %</li>
                <li>Stock P/E 75.2</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right-dashboard">
          <div className="news-panel">
            <h4>NEWS</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae, excepturi dolorum tenetur facere corrupti at quam autem consequatur dolor non praesentium vel.</p>
          </div>
        </div>
        {/* <div className="upper-body">
                <h1>Utique Enterprises Ltd</h1>
            </div>
            <div className="lower-table"></div> */}
      </div>
      <div id="ch" style={{ width: '100%', height: '50%' }}></div>
    </div>
  );
}

export default Dashboard;