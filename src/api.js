import axios from 'axios';
/* 

const API_KEY = '65063cda';
const BASE_URL = 'http://www.omdbapi.com/'; //http://www.omdbapi.com/?i=tt3896198&apikey=65063cda */

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch movies');
  }
  
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;   
    
  } catch (error) {
    console.log(error);
    
    throw new Error('Failed to fetch movie details');
  }
};
