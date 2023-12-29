import React, { useState, useEffect } from 'react';

const News = () => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BaseUrl = 'https://api.iex.cloud/v1';
  const token = 'pk_85f727a2802d4a7d9de64485baeb569b'; 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${BaseUrl}/data/CORE/NEWS?last=1&token=${token}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h1 align="center">News</h1>{loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {newsData && newsData.length > 0 && (
        <div>
            <h3>Headline: </h3>
          <p><strong>{newsData[0].headline}</strong></p>
          <h3>Latest News Summary:</h3>
          <p><strong>{newsData[0].summary}</strong></p>
        </div>
      )}
    </div>
  );
};

export default News;
