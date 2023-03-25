import React from 'react';
import { render, screen } from '@testing-library/react';
import Routes from './App';

test('renders learn react link', () => {
  render(<Routes />);
  const routeElement = screen.getByRole(/home/i);
  expect(routeElement).toBeInTheDocument();
});
