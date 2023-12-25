import React from 'react';

const CompanyData = ({ company }) => {
  const compData = company[0];

  return (
    <>
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
