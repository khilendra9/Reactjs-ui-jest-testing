import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders Welcome message on Home page', () => {
  render(<Home />);
  expect(screen.getByText(/Welcome to the Sample UI/i)).toBeInTheDocument();
});
