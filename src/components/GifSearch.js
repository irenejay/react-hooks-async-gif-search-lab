// GifSearch.js
import React, { useState } from 'react';

function GifSearch({ fetchGifs }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGifs(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for gifs..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
