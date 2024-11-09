import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

test('renders About page content', () => {
  render(<About />);
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  expect(screen.getByText(/This is the about page/i)).toBeInTheDocument();
});
