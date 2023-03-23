import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Footer from '../../../../components/footer/Footer'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'

const Importancia = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#FFC727'} />
      <Footer bgColor={'#FFC727'} />
      
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0 mb-20'>
        <h1 className='text-black font-serif text-3xl p-4 mb-6 py-4 md:p-6 text-[#FFC727] rounded-lg '>IMPORTANCIA DE LA ACTIVIDAD FÍSICA</h1>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
          La Organización Mundial de la Salud(OMS)(2020) informa que la actividad física
          tiene importantes beneficios para la salud, reduciendo el riesgo de padecer enfermedades
          del corazón, cáncer, diabetes, depresión o ansiedad. Recomiendan las siguientes actividades
          según edades.</p><br />
        <ol>
          <li className='text-black text-justify text-lg md:text-xl leading-8'><h3 className='text-justify text-lg font-serif md:text-6xl'>Menores de 5 años:</h3> Realizar actividades físicas y juegos varias veces al diabetes
            No mantener a los/as niños/as sin moverse mas de una hora seguida.</li><br />
          <li className='text-black text-justify text-lg md:text-xl leading-8'> <h3 className='text-justify text-lg font-serif md:text-6xl'> 5 a 17 años:</h3> Una hora de actividad física moderada o intensa al
            día 3 veces por semana actividades aeróbicas.</li><br />
          <li className='text-black text-justify text-lg md:text-xl leading-8'><h3 className='text-justify text-lg font-serif md:text-6xl'>18 a 64 años:</h3> Actividades aeróbicas entre 120 y 300 minutos al día
            Fortalecimiento muscular</li>
        </ol>
        <h2 className='text-black text-justify text-lg md:text-xl leading-8'>Fuente: OMS en: <a className='underline'href="https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" target='_blank' rel="noreferrer" >Click Aquí</a></h2>
      </div>
    </>
  )
}
export default Importancia;