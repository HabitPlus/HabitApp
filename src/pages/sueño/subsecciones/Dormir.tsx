import React from 'react'
import { BackButton } from '../../../components/Arrow'
import Header from '../../../components/Header'
import Nav from '../../../components/Nav'

const Dormir = () => {
  return (
    <>
    <Header/>
    <BackButton/>
    <Nav/>
    
    <div className='flex flex-col items-center justify-center text-center mt-10 px-4 md:px-0'>
        <h1 className='text-black font-bold text-xl md:text-6xl p-4 mb-6 py-4 md:p-6 bg-blue rounded-lg '>El Dormir Bien</h1>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
          Dormir bien es una necesidad del ser humano pues el sueño permite que nuestro cuerpo se recupere del desgaste del día a día. No todo el mundo necesita dormir las mismas horas y con la vida van cambiando nuestras necesidades de horas de sueño. <br /><br />
          Dormir bien no es sólo dedicarle un número de horas, ni demasiadas más, ni menos, es también tener unos hábitos a la hora de ir a dormir.
        </p>
      </div>
    
    

    </>
  )
}

export default Dormir
