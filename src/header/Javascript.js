import React, { useState, useEffect } from 'react';

const Javascript = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/courses');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid response format. Expected JSON.');
        }

        const result = await response.json();
        console.log('Data:', result.courses);
        setData(result.courses);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <ul>
            {data.map((course) => (
              <li key={course.id}>
                <h1>{course.name}</h1>
                {/* Render other details of the course */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Javascript;
