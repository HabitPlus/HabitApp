import React from 'react'
import { BackButton } from '../../../components/Arrow'
import Header from '../../../components/Header'
import Nav from '../../../components/Nav'
import imgHabitos from '../../sueño/imgHabitos.jpg'


const Habitos = () => {
  return (
    <>
    <Header />
      <BackButton />
      <Nav />
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0'>
        <h1 className='text-black font-bold text-xl md:text-4xl p-4 mb-6 py-4 md:p-6 bg-blue rounded-lg '>Hábitos para Dormir Bien</h1>
        <img src={imgHabitos} alt='Dormir bien' className='my-8 w-full md:w-auto max-h-96' />
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
        Fuente: <a href="https://farmaadicta.com/salud/enfermedades/higiene-del-sueno-infografia/" target='_blank'>farmaadicta.com/salud/higiene-del-sueno-infografia/</a></p> <br />
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
        Puedes seguir también estos consejos para establecer lo que se denomina RUTINA DEL SUEÑO: <br />
         - Darse un baño caliente con sales de lavanda o de Epson. <br />
         - Evitar pantallas, <br />
         - Tomar una cena ligera, <br />
         - Un vaso de leche caliente antes de dormir <br />
         - Y tener un lugar lo máximo de cómodo posible para dormir. 
        </p>
      </div>

    </>
  )
}

export default Habitos
