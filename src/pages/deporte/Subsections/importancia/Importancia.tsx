import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/footer/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports1 = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#FFC727'} />
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0'>
        <h1 className='text-black font-serif text-4xl p-4 mb-6 py-4 md:p-6 text-[#FFC727] rounded-lg '>IMPORTANCIA DE LA ACTIVIDAD FÍSICA</h1>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
          La Organización Mundial de la Salud(OMS)(2020) informa que la actividad física
          tiene importantes beneficios para la salud, reduciendo el riesgo de padecer enfermedades
          del corazón, cáncer, diabetes, depresión o ansiedad. Recomiendan las siguientes actividades
          según edades.</p>
        <ol>
          <li className='text-black text-justify text-lg md:text-xl leading-8'><h3 className='text-justify text-xl font-serif md:text-6xl'>Menores de 5 años:</h3> Realizar actividades físicas y juegos varias veces al diabetes
            No mantener a los/as niños/as sin moverse mas de una hora seguida.</li>
          <li className='text-black text-justify text-lg md:text-xl leading-8'> <h3 className='text-justify text-xl font-serif md:text-6xl'> 5 a 17 años:</h3> Una hora de actividad física moderada o intensa al
            día 3 veces por semana actividades aeróbicas.</li>
          <li className='text-black text-justify text-lg md:text-xl leading-8'><h3 className='text-justify text-xl font-serif md:text-6xl'>18 a 64 años:</h3> Actividades aeróbicas entre 120 y 300 minutos al día
            Fortalecimiento muscular</li>
        </ol>
        <h2 className='text-black text-justify text-lg md:text-xl leading-8'>Fuente: OMS en: <a className='bg-blue' href="https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" target='_blank' rel="noreferrer" >Click Aquí</a></h2>
      </div>
      <Footer />
    </>
  )
}
export default Sports1