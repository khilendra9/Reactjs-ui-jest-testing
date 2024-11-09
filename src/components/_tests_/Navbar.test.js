import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('renders the Navbar with the correct title', () => {
    render(<Navbar />);
    expect(screen.getByText(/My Sample UI/i)).toBeInTheDocument();
});
