import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports1 = () => {
  return (
    <>
    <BackButton/>
    <Header/>
    <Nav/>
    <div className='flex justify-center mt-10'>
    <h1 className='text-black text-center h-fit w-fit p-2 bg-yellow rounded-lg md:text-6xl md:p-6'>IMPORTANCIA DE LA ACTIVIDAD FÍSICA</h1>
    </div>

    <div className='justify-center p-5'>  
      <p className='text-justify text-xl md:text-6xl'>La Organización Mundial de la Salud(OMS)(2020) informa que la actividad física<br/> 
      tiene importantes beneficios para la salud, reduciendo el riesgo de padecer enfermedades<br/>
      del corazón, cáncer, diabetes, depresión o ansiedad. Recomiendan las siguientes actividades<br/>
      según edades.</p>

      <ol>
        <li className='text-justify text-xl md:text-6xl'>Menores de 5 años: Realizar actividades físicas y juegos varias veces al diabetes<br/>
        No mantener a los/as niños/as sin moverse mas de una hora seguida.</li>
        <li className='text-justify text-xl md:text-6xl'>5 a 17 años: Una hora de actividad física moderada o intensa al<br/> 
          día 3 veces por semana actividades aeróbicas.</li>
        <li className='text-justify text-xl md:text-6xl'>18 a 64 años: Actividades aeróbicas entre 120 y 300 minutos al día<br/>
        Fortalecimiento muscular</li>
      </ol>
      <h2 className='text-justify text-xl md:text-5xl'>Fuente: OMS en: https://www.who.int/es/news-room/fact-sheets/detail/physical-activity</h2>
    </div>

    <Footer/>
    </>
  )
}

export default Sports1