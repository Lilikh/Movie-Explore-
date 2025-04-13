import React from 'react';
import { render,fireEvent} from '@testing-library/react';
import FavoriteButton from './FavoritButton';

describe('FavoriteButton', () => {
  const mockMovie = {
    Title: 'Inception',
    Year: '2010',
    imdbID: 'tt1375666',
    Poster: 'N/A'
  };

  beforeEach(() => {
   
    localStorage.clear();
  });

  test('renders the button with the correct initial state', () => {
    const { getByRole } = render(<FavoriteButton movie={mockMovie} />);
    const button = getByRole('button');


    expect(button.querySelector('i').className).toContain('text-gray-400');
  });

  test('adds the movie to favorites on click', () => {
    const { getByRole } = render(<FavoriteButton movie={mockMovie} />);
    const button = getByRole('button');

   
    fireEvent.click(button);

 
    expect(button.querySelector('i').className).toContain('text-red-500');


    const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
    expect(savedFavorites).toEqual([mockMovie]);
  });

  test('removes the movie from favorites on click when already favorited', () => {
    localStorage.setItem('favorites', JSON.stringify([mockMovie]));

    const { getByRole } = render(<FavoriteButton movie={mockMovie} />);
    const button = getByRole('button');

    expect(button.querySelector('i').className).toContain('text-red-500');


    fireEvent.click(button);

    expect(button.querySelector('i').className).toContain('text-gray-400');

    const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
    expect(savedFavorites).toEqual([]);
  });

  test('persists the favorite state across renders based on localStorage', () => {

    localStorage.setItem('favorites', JSON.stringify([mockMovie]));

    const { getByRole, rerender } = render(<FavoriteButton movie={mockMovie} />);
    const button = getByRole('button');
    expect(button.querySelector('i').className).toContain('text-red-500');

    rerender(<FavoriteButton movie={mockMovie} />);

    expect(button.querySelector('i').className).toContain('text-red-500');
  });
});
