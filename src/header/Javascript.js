import React, { useState, useEffect } from 'react';

const JavaScript = () => {
  const [challenges, setChallenges] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch JavaScript challenges from freeCodeCamp API
    fetch('https://api.freecodecamp.org/api/studyplan/get-public-study-group')
      .then(response => response.json())
      .then(data => {
        // Log the data to the console for inspection
        console.log(data);

        // Check if the challenges property exists in the response
        if (data && data.challenges) {
          // Update state with fetched challenges
          setChallenges(data.challenges);
        } else {
          // Handle the case where challenges property is missing
          setError('Challenges data not found');
        }
      })
      .catch(error => {
        // Update state with the error
        setError(error.message);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <h1>JavaScript Challenges from freeCodeCamp</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {challenges.map(challenge => (
          <li key={challenge._id}>{challenge.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default JavaScript;
