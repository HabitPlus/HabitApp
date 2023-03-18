import React from 'react'
import { BackButton } from '../../../components/Arrow'
import Header from '../../../components/Header'
import Nav from '../../../components/Nav'

const Efectos = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav />
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0'>
        <h1 className='text-black font-bold text-xl md:text-4xl p-4 mb-6 py-4 md:p-6 bg-blue rounded-lg '>Causas y Efectos del Insomnio</h1>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
        El insomnio se da por diversos motivos. En general nos puede llevar a tener problemas para dormir las preocupaciones y el estrés, la ansiedad, la ira, el miedo, la tristeza, los malos hábitos de sueño, 
        determinadas enfermedades y medicamentos, la edad, el sedentarismo y el uso de pantallas. <br /><br />
        </p>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
        Escucha el programa de Ángeles Caballero de Onda Cero sobre las causas que producen mal dormir:  <br />
        <br />
       
        <a className='bg-blue' href="https://www.ondacero.es/programas/mas-de-uno/audios-podcast/que-sabemos/mal-dormir-causas-formas-poner-fin-noches-vela_20220207620117b7f6a5490001dd3f8d.html">Para escuchar el programa dar Click Aquí</a>
        </p>

      </div>
    </>
  )
}

export default Efectos
