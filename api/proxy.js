const axios = require('axios');

module.exports = async (req, res) => {
  const { s, i } = req.query;
  const API_KEY = process.env.VITE_API_KEY;
  const BASE_URL = 'http://www.omdbapi.com/';

  try {
    const url = s
      ? `${BASE_URL}?s=${s}&apikey=${API_KEY}`
      : `${BASE_URL}?i=${i}&apikey=${API_KEY}`;
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: error.message,
      data: error.response?.data,
    });
  }
};