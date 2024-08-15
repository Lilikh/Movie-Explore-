import { useState } from 'react';
import { searchMovies, getMovieDetails } from '../api';

const useMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const data = await searchMovies(query);
      setMovies(data.Search || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (id) => {
    setLoading(true);
    try {
      const data = await getMovieDetails(id);
      setSelectedMovie(data);
    } catch (err) {
      setError(err.message('not find anything'));
    } finally {
      setLoading(false);
    }
  }; 
 



  return {
    query,
    setQuery,
    movies,
    selectedMovie,
    fetchMovies,
    fetchMovieDetails,
    loading,
    error
  };
};

export default useMovies;
