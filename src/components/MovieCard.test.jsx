import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';


const mockLocalStorage = () => {
  const storage = {};

  return {
    getItem: jest.fn((key) => storage[key] || null),
    setItem: jest.fn((key, value) => {
      storage[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete storage[key];
    }),
    clear: jest.fn(() => {
      Object.keys(storage).forEach((key) => delete storage[key]);
    }),
  };
};

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage() });

describe('MovieCard Component', () => {
  const movie = {
    Title: 'Inception',
    Poster: 'https://example.com/inception.jpg',
    imdbID: 'tt1375666'
  };

  const onClickMock = jest.fn();

  beforeEach(() => {
    window.localStorage.clear();
  });

  test('renders the component with the correct movie title and poster', () => {
    render(<MovieCard movie={movie} onClick={onClickMock} />);

    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByAltText('Inception')).toHaveAttribute('src', 'https://example.com/inception.jpg');
  });

  test('favorite button toggles correctly and updates localStorage', () => {
    render(<MovieCard movie={movie} onClick={onClickMock} />);

    const favoriteButton = screen.getByRole('button');
    const heartIcon = screen.getByRole('button').firstChild;

 
    expect(heartIcon).toHaveClass('text-gray-400');

    fireEvent.click(favoriteButton);

  
    expect(heartIcon).toHaveClass('text-red-500');

   
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    expect(storedFavorites).toHaveLength(1);
    expect(storedFavorites[0].imdbID).toBe(movie.imdbID);

    fireEvent.click(favoriteButton);

    expect(heartIcon).toHaveClass('text-gray-400');


    expect(localStorage.getItem('favorites')).toBe('[]');
  });

  test('onClick handler is called when the card is clicked', () => {
    render(<MovieCard movie={movie} onClick={onClickMock} />);

    const card = screen.getByRole('img', { name: /inception/i }).closest('div');
    fireEvent.click(card);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
