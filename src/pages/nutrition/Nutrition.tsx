import React from 'react'
import Carrousel from './CarouselNutrition'
import Header from '../../components/Header'
import { BackButton } from '../../components/Arrow'
import Nav from '../../components/Nav'


interface DeporteProps {
  backgroundColor: string;
}
const Nutrition: React.FC<DeporteProps> = ({ backgroundColor }) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#53B965'} />
      <>
        <div className="text-6xl">
          <h1 className='text-green-font font-serif text-center md: text-5xl font-semibold mt-14 tracking-widest'>Nutrición</h1>
        </div>
        <Carrousel />
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

export default Nutrition;