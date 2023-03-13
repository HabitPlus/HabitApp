import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Nutricion from '../nutricion/Nutricion';
import Layout from '../../components/Layout';
import App from '../../App';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('should render a button', () => {
    render(<App/>)
    // render( <BrowserRouter>
    //   <Routes>
    //    <Route element={<Layout />}>
    //     <Route path="/home" element={<Home />} />
    //     </Route>
    //   </Routes>
    //   </BrowserRouter>);
      screen.debug()
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});

  // jest.mock("react-router-dom");
  describe("HomePage component", () => {
    it("navigates to the nutrición page when the button is clicked", async () => {  
      render( <BrowserRouter>
          <Home /> 
        </BrowserRouter>);
      // const buttonHabit = screen.getByRole("button", { name: /habit\+/i });
      // screen.debug()
      // await userEvent.click(buttonHabit);
      const button = screen.getByRole("button", { name: /nutrición/i });
      screen.debug()
      await userEvent.click(button);
      screen.debug()
      waitFor(()=>
      expect(screen.getByRole('heading',{name:'Nutrición'})).toBeInTheDocument());
      screen.debug()
    });
  });
