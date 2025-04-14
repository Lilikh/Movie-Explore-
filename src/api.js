import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log('Environment:', { API_KEY, BASE_URL });

export const searchMovies = async (query) => {
  try {
    const url = `${BASE_URL}?s=${query}&apikey=${API_KEY}`;
    console.log('Fetching movies from:', url);
    const response = await axios.get(url);
    console.log('Search Movies Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      headers: error.config?.headers,
      code: error.code,
    });
    throw new Error('Failed to fetch movies');
  }
};

export const getMovieDetails = async (id) => {
  try {
    const url = `${BASE_URL}?i=${id}&apikey=${API_KEY}`;
    console.log('Fetching movie details from:', url);
    const response = await axios.get(url);
    console.log('Movie Details Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      headers: error.config?.headers,
      code: error.code,
    });
    throw new Error('Failed to fetch movie details');
  }
};