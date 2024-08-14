import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders SearchBar and handles input change', () => {
  const handleQueryChange = jest.fn();
  const handleSearch = jest.fn();
  
  render(<SearchBar query="" onQueryChange={handleQueryChange} onSearch={handleSearch} />);
  
  // Debugging logs
  console.log(screen.getByPlaceholderText('...'));
  console.log(screen.getByText('Search'));

  fireEvent.change(screen.getByPlaceholderText('Search for movies...'), { target: { value: 'Inception' } });
  fireEvent.click(screen.getByText('Search'));
  
  expect(handleQueryChange).toHaveBeenCalledWith('Inception');
  expect(handleSearch).toHaveBeenCalled();
});

