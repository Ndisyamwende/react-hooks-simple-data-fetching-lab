// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch random dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogImage(data.message))
      .catch(error => console.error('Error fetching dog image:', error));
  }, []); // The empty dependency array ensures the effect runs once on component mount

  return (
    <div>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
