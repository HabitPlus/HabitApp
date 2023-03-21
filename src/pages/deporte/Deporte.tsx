import React from 'react'
import Carrousel from './Carrousel'
import Header from '../../components/Header'
import { BackButton } from '../../components/Arrow'
import Nav from '../../components/Nav'

interface DeporteProps {
  backgroundColor: string;
}
const Deporte: React.FC<DeporteProps> = ({ backgroundColor }) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#FFC727'} />
      <>
        <h1 className='text-[#FFC727] text-center font-serif text-4xl md:text-8xl font-semibold mt-14 md:mt-36'>Deporte</h1>

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

export default Deporte;