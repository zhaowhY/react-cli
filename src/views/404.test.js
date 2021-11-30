import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './404';
import '@testing-library/jest-dom';

test('renders 404 page', () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/NotFound/i);
  expect(linkElement).toBeInTheDocument();
});
