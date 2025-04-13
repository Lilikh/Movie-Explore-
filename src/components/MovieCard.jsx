import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FavoriteButton from './FavoritButton';


const MovieCard = ({ movie, onClick }) => {

  return (
    <div 
      className=' bg-green-950 w-[200px] m-2 rounded-md text-center px-3 py-2
       text-white cursor-pointer transition-transform duration-300 transform hover:scale-110' 
      onClick={onClick}>
      <img className='w-full h-auto rounded-md p-2' src={movie.Poster} alt={movie.Title} />
      <div className='flex flex-row justify-center gap-4 text-base '>
        <h3>{movie.Title}</h3>
        <FavoriteButton movie={movie} />
       
      </div>
    </div>
  );
};

export default MovieCard;
