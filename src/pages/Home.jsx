import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import useMovies from "../hooks/useMovies";
import Header from "../components/Header";


const Home = () => {
  const {
    query,
    setQuery,
    movies,
    fetchMovies,
    selectedMovie,
    error,
  } = useMovies();
  
  return (
    <div>
      <Header />
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSearch={fetchMovies}
        
      />
      {error && <p>Error: {error}</p>}
      {!selectedMovie && (
        <SearchResults movies={movies} />
      )}
       
    </div>
     
  );
};

export default Home;
