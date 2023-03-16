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
        <Nav  />
        <>
        <h1 className='text-white text-center text-3xl font-semibold mt-14'>Deporte</h1>
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