import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../api";
import GridLoader from "react-spinners/GridLoader";
import Header from "../components/Header";
import FavoriteButton from "../components/FavoritButton";


const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(id);

        setMovie(movieData);
      } catch (err) {
        setError("Failed to fetch movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading)
    return (
      <div className="flex flex-row min-h-screen justify-center items-center">
        <GridLoader
          color="#dd0000"
          loading={loading}
          cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "red",
          }}
          size={18}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie data</p>;

  return (
    <>
    <Header />
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 text-center">
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 text-slate-50 text-base sm:text-lg md:text-xl p-2
           sm:p-3 rounded-md w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-6 sm:mb-8 md:mb-12"
        >
          Back to Search Results
        </button>
    
        <div className='flex flex-col justify-center w-full sm:w-4/12 lg:w-3/12 
        m-auto bg-green-950 rounded-md mb-4 gap-4 sm:gap-6 text-base px-4 sm:px-6 py-4'>
     <img
        src={movie.Poster}
        alt={movie.Title}
        className="m-auto mb-2 sm:mb-4 pt-4 md:mb-6 lg:mb-4 transition-transform 
        duration-300 transform hover:scale-95 max-w-full h-auto"
      />
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
    <h1 className="text-white text-base sm:text-xl md:text-2xl">
        {movie.Title} ({movie.Year})
      </h1 >
      <FavoriteButton movie={movie} /> 
    </div>
     </div>
 
        <div className="flex flex-col justify-center border border-slate-800 rounded-md m-auto w-full sm:w-8/12 md:w-6/12 lg:w-[800px] p-4">
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
        </div>
      </div>
      </>
  );
};

export default MovieDetails;
