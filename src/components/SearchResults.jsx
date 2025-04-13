import React from 'react';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';




const SearchResults = ({ movies }) => {
  const navigate = useNavigate();
 
  

  const handleSelectMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className='flex flex-wrap justify-center '>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie}
         onClick={() => handleSelectMovie(movie.imdbID)}
          />
          
      ))}
    </div>
  );
};

export default SearchResults;
