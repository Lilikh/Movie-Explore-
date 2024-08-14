import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FavoriteButton = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(savedFavorites.some(favMovie => favMovie.imdbID === movie.imdbID));
  }, [movie]);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(prevState => {
      const newFavoriteStatus = !prevState;
      let savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (newFavoriteStatus) {
        savedFavorites.push(movie);
      } else {
        savedFavorites = savedFavorites.filter(favMovie => favMovie.imdbID !== movie.imdbID);
      }
      localStorage.setItem('favorites', JSON.stringify(savedFavorites));
      return newFavoriteStatus;
    });
  };

  return (
    <button onClick={handleFavoriteClick}>
      <i className={`fas fa-heart ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}></i>
    </button>
  );
};

export default FavoriteButton;
