import React from 'react'
import { BackButton } from '../../components/Arrow'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import CarrouselMental from './Carrusel.mental'

interface SaludProps {
  backgroundColor: string;
}

const SaludMental: React.FC<SaludProps> = ({ backgroundColor }) => {
  return (
    <>
    <Header/>
    <BackButton/>
    <Nav bgColor={'#9F3BF8'} />
    <h1 className='text-center mt-14 text-3xl font-serif text-[#9F3BF8]'>Salud Mental</h1>
    <CarrouselMental/>
    <style type="text/css">
        {`
          body {
            background-color: ${backgroundColor};
          }
        `}
      </style>
    </>
  )
}

export default SaludMental