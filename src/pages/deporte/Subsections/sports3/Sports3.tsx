import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports3 = () => {
  return (
    <>
    <BackButton/>
    <Header/>
    <Nav/>
    <div className='flex justify-center mt-10'>
    <h1 className='text-black text-center h-fit w-fit p-2 bg-yellow rounded-lg md:text-3xl'>CONSEJOS PARA REALIZAR ACTIVIDAD FÍSICA</h1>  
    </div>
    <div className='justify-center p-5'>
      <p className='text-justify text-xl md:text-6xl'>Empezar a hacer ejercicio requiere que tengamos en consideración una <br />
        serie de consejos, como:</p>
      <ul> 
       <li className='text-justify text-xl md:text-6xl'>Antes de cualquier práctica deportiva, calentar el cuerpo.</li> 
       <li className='text-justify text-xl md:text-6xl'> Ajustar la intensidad y el tipo de ejercicio a nuestras posibilidades, <br />
      empezando por ejercicios sencillos y pocas repeticiones e ir aumentando.</li>
       <li className='text-justify text-xl md:text-6xl'> Mantenerse bien hidratado/a durante la actividad física.</li>
       <li className='text-justify text-xl md:text-6xl'> Después de hacer ejercicio, ducharse y lavar la ropa.</li>
      </ul>
      <h2 className='text-justify text-xl md:text-6xl'>Puedes ver el siguiente video con recomendaciones de la OMS <br />
      sobre actividades físicas:https://www.youtube.com/watch?v=DcZO3YzbWuA</h2>

    </div>
  
    <Footer/>
    </>
  )
}

export default Sports3