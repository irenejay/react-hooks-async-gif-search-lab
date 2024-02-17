
import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = (query) => {
   
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=84XQEJOFke92IMhTYpwstN8xZRIxsxJq&rating=g`)
      .then(response => response.json())
      .then(data => {
        // Extract the first 3 gifs from the response and update state
        const firstThreeGifs = data.data.slice(0, 3);
        setGifs(firstThreeGifs);
      })
      .catch(error => console.error('Error fetching gifs:', error));
  };

  return (
    <div>
      <GifSearch fetchGifs={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
