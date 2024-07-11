import React, { useState, useEffect } from 'react';
import { API_URL } from '../../constants';

function TitleList() {
  const [titles, setTitle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadTitles() {
      try {
        console.log('Fetching titles from:', API_URL);
        const response = await fetch(`${API_URL}`);
        console.log('Response status:', response.status);
        if (response.ok) {
          const json = await response.json();
          console.log('Response JSON:', json);
          setTitle(json);
        } else {
          const errorText = await response.text();
          throw new Error(`Error ${response.status}: ${errorText}`);
        }
      } catch (e) {
        setError("An error occurred...");
        console.log("An error occurred", e);
      } finally {
        setLoading(false);
      }
    }
    loadTitles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {titles.map((title) => (
        <div key={title.id} className="post-container">
          {title.body}
        </div>
      ))}
    </div>
  );
}

export default TitleList;
