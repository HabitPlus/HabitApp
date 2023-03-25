import React from 'react'
import Carrousel from './Carrousel'
import Header from '../../components/header/Header'
import { BackButton } from '../../components/arrow/Arrow'
import Nav from '../../components/nav/Nav'

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
        <div className="">
          <h1 className='text-center mt-14 text-3xl font-serif text-[#FFC727]'>Deporte</h1>
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

export default Deporte;