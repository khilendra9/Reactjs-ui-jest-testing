import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from '../ItemList';

test('renders list of items', () => {
  render(<ItemList />);
  
  expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Item 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Item 3/i)).toBeInTheDocument();
});
