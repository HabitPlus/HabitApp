import React from 'react'
import Carousel from './CarouselNutricion'
import Header from '../../components/Header'
import { BackButton } from '../../components/Arrow'
import Nav from '../../components/Nav'


interface DeporteProps {
  backgroundColor: string;
}
const Nutricion: React.FC<DeporteProps> = ({ backgroundColor }) => {
  return (
    <>
    <Header />
        <BackButton />
        <Nav  />
        <>
        <h1 className='text-black text-center text-3xl font-semibold mt-14'>Nutrición</h1>
      <Carousel />
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

export default Nutricion;