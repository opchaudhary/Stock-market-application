// CompanyData.js
import React, { useEffect, useState } from 'react';
import './CompanyData.css'

const CompanyData = () => {
  const [compData, setCompanyData] = useState(null);
  const [comp, setComp] = useState('AAPL');
  const BaseUrl = 'https://api.iex.cloud/v1';
  const token = 'pk_8e0ab2b9f4474c1eae488683e98feea1';

  const fetchCompanyData = async () => {
    try {
      const response = await fetch(`${BaseUrl}/data/core/company/${comp}?token=${token}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setCompanyData(result[0]);
      console.log('CompanyData', result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    const handleSearch = () => {
      fetchCompanyData(comp);
    };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCompanyData(comp);
    };

    fetchData();
  }, []);

  return (
       <>
   
          <div>
        <input
          type="text"
          value={comp}
          onChange={(e) => setComp(e.target.value)}
          placeholder="Enter stock symbol"
        />
        <button onClick={handleSearch}>Search</button>

      </div>  
      {compData ? (
        <>
          <div className="heading-container">
            <h1>{compData.symbol}</h1>
          </div>
          <div className="table-container">
            <ul>
              <li>
                <strong>Company Name :</strong> {compData.companyName}
              </li>
              <li>
                <strong>CEO :</strong> {compData.ceo}
              </li>
              <li>
                <strong>Industry :</strong> {compData.industry}
              </li>
              <li>
                <strong>Sector :</strong> {compData.sector}
              </li>
              <li>
                <strong>Total Employees :</strong> {compData.employees}
              </li>
              <li>
                <strong>Symbol :</strong> {compData.symbol}
              </li>
              <li>
                <strong>Description :</strong> {compData.longDescription}
              </li>
              <li>
                <strong>Exchange :</strong> {compData.exchange}
              </li>
              <li>
                <strong>Website :</strong>{' '}
                <a href={compData.website} target="_blank" rel="noopener noreferrer">
                  {compData.website}                                                                                                                                                                                 
                </a>
              </li>
             
            </ul>
          </div>
        </>
      ) : (
        <p>Loading company data...</p>
      )}
   </>
    
  );
};

export default CompanyData;

