import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/footer/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports3 = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#FFC727'} />
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0'>
        <h1 className='text-black font-serif text-xl md:text-4xl p-4 mb-6 py-4 md:p-6 text-[#FFC727] rounded-lg '>CONSEJOS PARA REALIZAR <br /> ACTIVIDAD FÍSICA</h1>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>Empezar a hacer ejercicio requiere que tengamos en consideración una
          serie de consejos, como:</p>
        <ul>
          <li className='text-black text-justify text-lg md:text-xl leading-8'>Antes de cualquier práctica deportiva, calentar el cuerpo.</li>
          <li className='text-black text-justify text-lg md:text-xl leading-8'> Ajustar la intensidad y el tipo de ejercicio a nuestras posibilidades,
            empezando por ejercicios sencillos y pocas repeticiones e ir aumentando.</li>
          <li className='text-black text-justify text-lg md:text-xl leading-8'> Mantenerse bien hidratado/a durante la actividad física.</li>
          <li className='text-black text-justify text-lg md:text-xl leading-8'> Después de hacer ejercicio, ducharse y lavar la ropa.</li>
        </ul>
        <h2 className='text-black text-justify text-lg md:text-xl leading-8'>Puedes ver el siguiente video con recomendaciones de la OMS
          sobre actividades físicas:<a className='bg-blue' href="https://www.youtube.com/watch?v=DcZO3YzbWuA" target='_blank' rel="noreferrer">Click Aquí</a></h2>
      </div>
      <Footer />
    </>
  )
}
export default Sports3