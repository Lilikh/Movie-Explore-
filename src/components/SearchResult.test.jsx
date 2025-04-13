import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchResults from './SearchResults';
import { useNavigate } from 'react-router-dom';


const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate
}));

describe('SearchResults Component', () => {
  beforeEach(() => {
 
    mockNavigate.mockClear();
  });

  test('renders MovieCard components for each movie', () => {
    const movies = [
      { Title: 'Movie 1', Poster: 'poster1.jpg', imdbID: 'tt001' },
      { Title: 'Movie 2', Poster: 'poster2.jpg', imdbID: 'tt002' }
    ];

    render(<SearchResults movies={movies} />);

   
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });

  test('navigates to the correct URL when a MovieCard is clicked', () => {
    const movies = [
      { Title: 'Movie 1', Poster: 'poster1.jpg', imdbID: 'tt001' },
      { Title: 'Movie 2', Poster: 'poster2.jpg', imdbID: 'tt002' }
    ];

    render(<SearchResults movies={movies} />);


    const movieCard = screen.getByText('Movie 1').closest('div');
    if (movieCard) {
      fireEvent.click(movieCard);
    } else {
      throw new Error('MovieCard for Movie 1 not found');
    }

    
    expect(mockNavigate).toHaveBeenCalledWith('/movie/tt001');
  });
});
