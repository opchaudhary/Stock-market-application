import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import './MainDashboard.css';
import News from './News';
import CompanyData from './CompanyData';

const MainDashboard = () => {
    const [data, setData] = useState();
    const [comp, setComp] = useState('AAPL');
    const BaseUrl = 'https://api.iex.cloud/v1';
    const token = 'pk_8e0ab2b9f4474c1eae488683e98feea1';

    const fetchCompanytrade= async () => {
        try {
            const response = await fetch(`${BaseUrl}/data/core/iex_deep/${comp}?token=${token}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
            console.log('TradeData', result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const chart = () => {
        Highcharts.chart('ch', {
            title: {
                text: 'Line Chart',
                style: {
                    color: '#FFF',
                },
            },
            chart: {
                backgroundColor: '#0b1d33',
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            xAxis: {
                labels: {
                    style: {
                        color: '#FFF',
                    },
                },
                title: {
                    text: 'X Axis',
                },
            },
            yAxis: {
                labels: {
                    style: {
                        color: '#FFF',
                    },
                },
                title: {
                    text: 'Values',
                },
            },
            series: [
                {
                    name: 'Series 1',
                    data: [10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120, 10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120, 10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120, 10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120],
                },
            ],
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchCompanytrade(comp);
            chart();
        };

        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <div className="dashboard-container">
                 <div className="left-dashboard">
               
                    <div className="comapany-panel">
                        <CompanyData />
                    </div>
               </div>
                <div className="right-dashboard">
                    <div className="news-panel">
                        <News />
                    </div>
                </div>
            </div>
            <div id="ch" style={{ width: '100%', height: '50%' }}></div>
        </div>
    );
};

export default MainDashboard;
