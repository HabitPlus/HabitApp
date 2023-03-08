import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';


describe('Button', () => {
  it('should render a button', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});