import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY || '65063cda';
const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://www.omdbapi.com/';
const PROXY_URL = 'https://movie-explore-proxy-abc.onrender.com/api/proxy'; // Update with your proxy URL
const USE_PROXY = import.meta.env.MODE !== 'development';

console.log('Environment:', {
  API_KEY,
  BASE_URL,
  PROXY_URL,
  USE_PROXY,
  MODE: import.meta.env.MODE
});

export const searchMovies = async (query) => {
  try {
    const url = USE_PROXY
      ? `${PROXY_URL}?s=${query}`
      : `${BASE_URL}?s=${query}&apikey=${API_KEY}`;
    console.log('Attempting to fetch movies from:', url);
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Movie-Explore-App/1.0'
      }
    });
    console.log('Search Movies Response:', {
      status: response.status,
      data: response.data
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      code: error.code
    });
    throw new Error('Failed to fetch movies');
  }
};

export const getMovieDetails = async (id) => {
  try {
    const url = USE_PROXY
      ? `${PROXY_URL}?i=${id}`
      : `${BASE_URL}?i=${id}&apikey=${API_KEY}`;
    console.log('Attempting to fetch movie details from:', url);
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Movie-Explore-App/1.0'
      }
    });
    console.log('Movie Details Response:', {
      status: response.status,
      data: response.data
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      code: error.code
    });
    throw new Error('Failed to fetch movie details');
  }
};