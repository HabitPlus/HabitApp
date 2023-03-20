import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Carousel from '../sueño/Carrusel';
import Header from '../../components/Header';
import { BackButton } from '../../components/Arrow';
import Nav from '../../components/Nav';
import Carrusel from '../sueño/Carrusel';


interface SueñoProps {
  backgroundColor: string;
}
const Sueño: React.FC<SueñoProps> = ({ backgroundColor }) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav />
      <>
        <h1 className='text-black text-center text-3xl font-semibold mt-14'>Sueño</h1>
        <Carrusel />
        <style type="text/css">
          {`
          body {
            background-color: ${backgroundColor};
          }
        `}
        </style>
      </>
    </>
  );
};

export default Sueño;