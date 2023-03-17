// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom';
// import Carousel from '../sueño/Carrusel';
// import Header from '../../components/Header';
// import { BackButton } from '../../components/Arrow';
// import Nav from '../../components/Nav';

// const Sueño = () => {
//   return (
//     <>

//       <h1>Habit+</h1>
//       <Carousel />
//     </>
//   );
// };

// export default Sueño;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Carousel from '../sueño/Carrusel';
import Header from '../../components/Header';
import { BackButton } from '../../components/Arrow';
import Nav from '../../components/Nav';

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
        <h1 className='text-center mt-5 font-serif text-4xl'>Sueño</h1>
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

export default Sueño;