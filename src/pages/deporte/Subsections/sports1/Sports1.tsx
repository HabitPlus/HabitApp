import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports1 = () => {
  return (
    <>
    <Header/>
    <BackButton/>
    <Nav/>
    <div className='flex flex-col items-center mt-10'>
    <h1 className='text-black text-center text-xl font-serif font-bold h-fit w-fit p-2 bg-yellow rounded-lg md:text-6xl md:p-6'>IMPORTANCIA DE LA ACTIVIDAD FÍSICA</h1>
    </div>

    <div className='justify-center p-6'>  
      <p className='text-justify text-xl font-medium md:text-6xl'>La Organización Mundial de la Salud(OMS)(2020) informa que la actividad física 
      tiene importantes beneficios para la salud, reduciendo el riesgo de padecer enfermedades
      del corazón, cáncer, diabetes, depresión o ansiedad. Recomiendan las siguientes actividades
      según edades.</p>

      <ol>
        <li className='text-justify text-xl font-medium mt-3 md:text-6xl'><h3 className='text-justify text-xl font-serif md:text-6xl'>Menores de 5 años:</h3> Realizar actividades físicas y juegos varias veces al diabetes
        No mantener a los/as niños/as sin moverse mas de una hora seguida.</li>
        <li className='text-justify text-xl font-medium mt-3 md:text-6xl'> <h3 className='text-justify text-xl font-serif md:text-6xl'> 5 a 17 años:</h3> Una hora de actividad física moderada o intensa al
          día 3 veces por semana actividades aeróbicas.</li>
        <li className='text-justify text-xl font-medium mt-3 md:text-6xl'><h3 className='text-justify text-xl font-serif md:text-6xl'>18 a 64 años:</h3> Actividades aeróbicas entre 120 y 300 minutos al día
        Fortalecimiento muscular</li>
      </ol>
      <h2 className='text-justify text-xl font-medium mt-3 md:text-6xl'>Fuente: OMS en: https://www.who.int/es/news-room/fact-sheets/detail/physical-activity</h2>
    </div>

    <Footer/>
    </>
  )
}

export default Sports1