// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import WatchList from './pages/WatchList';
import './index.css'

const App = () => {
  return (
   
    <Router>
      <Routes>
       
        <Route path="/" exact element={<Home/>} />
        <Route path="/movie/:id" element={<MovieDetails/>} />
        <Route path="/WatchList" element={<WatchList/>} />
      </Routes>
    </Router>

  );
};

export default App;
