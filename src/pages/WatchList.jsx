import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


const WatchList = () => {
    
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const navigate=useNavigate();

  const handleSelectMovie = (id) => {
    navigate(`/movie/${id}`);
  };
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(savedFavorites);
  }, []);


  const handleFavoriteClick = (movie, e) => {
    e.stopPropagation();
    const updatedFavorites = favoriteMovies.filter(favMovie => favMovie.imdbID !== movie.imdbID);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavoriteMovies(updatedFavorites);
  };

  return (
    <div>
     <Header />
      <h1 className='text-center text-4xl  font-bold mb-8 mt-4 text-white font-serif'>My Watch List</h1>
      <div className='flex flex-wrap justify-center'>
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map(movie => (
            <div key={movie.imdbID}
             className='border border-gray-300 bg-green-950 w-[200px] m-2 rounded-md text-center
              text-white cursor-pointer transition-transform duration-300 transform hover:scale-110' 
              onClick={() => handleSelectMovie(movie.imdbID)}
              >
                
              <img className='w-full h-auto rounded-md p-2' src={movie.Poster} alt={movie.Title} />
              <div className='flex justify-center gap-3 text-base p-2'>
                <h3>{movie.Title}</h3>
                <button onClick={(e) => handleFavoriteClick(movie,e)}>
                  <i className='fas fa-heart text-red-500'></i> 
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-red-600 text-3xl p-16'>No favorite movies found :(</p>
        )}
      </div>
    </div>
  );
};

export default WatchList;
