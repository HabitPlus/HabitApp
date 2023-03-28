/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import Nutricion from '../nutrition/Nutrition';
import Layout from '../../components/layout/Layout';
import App from '../../App';
import userEvent from '@testing-library/user-event';
import Landing from '../landing/Landing';
import SaludMental from '../mentalhealth/MentalHealth';
import Deporte from '../sports/Sport';
import Sueño from '../sleep/Sleep';
import Contact from '../contact/Contact';

describe('Button', () => {
  it('should render a button', () => {
    render(<App />, {wrapper: BrowserRouter})
    screen.debug()
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});

  describe("LandingPage component", () => {
    it("navigates to the home page when the button is clicked", async () => {  
      render(<MemoryRouter initialEntries={['/']}><Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing backgroundColor={"#FFFCF3"} />} />
        <Route path="/home" element={<Home backgroundColor={"#FFFCF3"}/>} />
      </Route>
    </Routes></MemoryRouter>)
      const buttonHabit = screen.getByRole("button", { name: /habit\+/i });
      //screen.debug()
      await userEvent.click(buttonHabit);
      expect(screen.getByRole('heading',{name:'Habit+'})).toBeInTheDocument();
    });
  });

  describe("HomePage component", () => {
    beforeEach(()=>{
      render(<MemoryRouter initialEntries={['/home']}><Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home backgroundColor={"#FFFCF3"} />} />
        <Route path="/nutricion" element={<Nutricion backgroundColor={"#E3F9EA"} />} />
        <Route path="/sueño" element={<Sueño backgroundColor={''} />} />
        <Route path="/salud-mental" element={<SaludMental backgroundColor='DFBBFF' />} />
        <Route path="/deporte" element={<Deporte backgroundColor='#FFC727' />} />
        <Route path="/contact" element={<Contact backgroundColor={'#FFFCF3'}/>} />
      </Route>
    </Routes></MemoryRouter>)
    })
    it("navigates to the nutrición page when the button is clicked", async () => { 
      const button = screen.getByText( /nutrición/i );
      //screen.debug()
      await userEvent.click(button);
      expect(screen.getByRole('heading',{name:'Nutrición'})).toBeInTheDocument();
    });

    it("navigates to the sueño page when the button is clicked", async () => { 
      const button = screen.getByText( /sueño/i );
      //screen.debug()
      await userEvent.click(button);
      expect(screen.getByRole('heading',{name:'Sueño'})).toBeInTheDocument();
    });

    it("navigates to the salud mental page when the button is clicked", async () => { 
      const button = screen.getByText( /salud mental/i );
      //screen.debug()
      await userEvent.click(button);
      expect(screen.getByRole('heading',{name:'Salud Mental'})).toBeInTheDocument();
    });

    it("navigates to the deporte page when the button is clicked", async () => { 
      const button = screen.getByText( /deporte/i );
      //screen.debug()
      await userEvent.click(button);
      expect(screen.getByRole('heading',{name:'Deporte'})).toBeInTheDocument();
    });
  });