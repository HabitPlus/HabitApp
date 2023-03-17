import { string } from 'prop-types'
import React from 'react'
import { BackButton } from '../../components/Arrow'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import CarouselNutricion from './CarouselNutricion'
import styles from './Nutricion.module.css'

interface NutricionProps {
  backgroundColor: string;
}

const Nutricion: React.FC<NutricionProps> = ({ backgroundColor }) => {
  return (
    <>
      <Header />
      <BackButton />
      <>
        <h1 className='text-center font-serif text-4xl mt-20'>Nutrición</h1>
        <CarouselNutricion />
        <style type="text/css">
          {`
            body {
              background-color: ${backgroundColor};
            }
          `}
        </style>
        <Nav />
      </>
    </>
  )
}

export default Nutricion