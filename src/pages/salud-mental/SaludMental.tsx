import React from 'react'
import { BackButton } from '../../components/Arrow'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import CarrouselMental from './Carrusel.mental'

type Props = {}

const SaludMental = (props: Props) => {
  return (
    <>
    <Header/>
    <BackButton/>
    <Nav/>
    <h1 className='text-center mt-14 text-3xl'>Salud Mental</h1>
    <CarrouselMental/>
    </>
  )
}

export default SaludMental