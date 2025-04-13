import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const PROXY_URL = '/api/proxy'; // Vercel serverless function

console.log('Environment Variables:', { API_KEY, BASE_URL });

export const searchMovies = async (query) => {
  try {
    // Use proxy on Vercel, direct API locally
    const url = import.meta.env.MODE === 'development'
      ? `${BASE_URL}?s=${query}&apikey=${API_KEY}`
      : `${PROXY_URL}?s=${query}`;
    const response = await axios.get(url);
    console.log('Search Movies Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config?.url,
    });
    throw new Error('Failed to fetch movies');
  }
};

export const getMovieDetails = async (id) => {
  try {
    const url = import.meta.env.MODE === 'development'
      ? `${BASE_URL}?i=${id}&apikey=${API_KEY}`
      : `${PROXY_URL}?i=${id}`;
    const response = await axios.get(url);
    console.log('Movie Details Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config?.url,
    });
    throw new Error('Failed to fetch movie details');
  }
};