import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter, MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Nutricion from '../nutricion/Nutricion';
import Layout from '../../components/Layout';
import App from '../../App';
import userEvent from '@testing-library/user-event';
import Landing from '../landing/Landing';
import SaludMental from '../salud-mental/SaludMental';
import Deporte from '../deporte/Deporte';
import Sueño from '../sueño/Sueño';
import Contact from '../contacto/contact';

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
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes></MemoryRouter>)
      const buttonHabit = screen.getByRole("button", { name: /habit\+/i });
      screen.debug()
      await userEvent.click(buttonHabit);
      expect(screen.getByRole('heading',{name:'Habit+'})).toBeInTheDocument();
    });
  });

  describe("HomePage component", () => {
    beforeEach(()=>{
      render(<MemoryRouter initialEntries={['/home']}><Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/nutricion" element={<Nutricion backgroundColor={"#E3F9EA"} />} />
        <Route path="/sueño" element={<Sueño />} />
        <Route path="/salud-mental" element={<SaludMental />} />
        <Route path="/deporte" element={<Deporte backgroundColor='#FFC727' />} />
        <Route path="/contact" element={<Contact backgroundColor={'#FFFCF3'}/>} />
      </Route>
    </Routes></MemoryRouter>)
    })
    it("navigates to the nutrición page when the button is clicked", async () => { 
      const button = screen.getByText( /nutrición/i );
      screen.debug()
      await userEvent.click(button);
      expect(screen.getByRole('heading',{name:'Nutrición'})).toBeInTheDocument();
    });

    it("navigates to the sueño page when the button is clicked", async () => { 
      const button = screen.getByText( /sueño/i );
      screen.debug()
      await userEvent.click(button);
      expect(screen.getByRole('heading',{name:'Sueño'})).toBeInTheDocument();
    });

    it("navigates to the salud mental page when the button is clicked", async () => { 
      const button = screen.getByText( /salud mental/i );
      screen.debug()
      await userEvent.click(button);
      expect(screen.getByRole('heading',{name:'Salud Mental'})).toBeInTheDocument();
    });

    it("navigates to the deporte page when the button is clicked", async () => { 
      const button = screen.getByText( /deporte/i );
      screen.debug()
      await userEvent.click(button);
      expect(screen.getByRole('heading',{name:'Deporte'})).toBeInTheDocument();
    });
  });