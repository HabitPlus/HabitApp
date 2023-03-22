import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'

const Efectos = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#5A88FC'} />
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0 lg:mx-72'>
        <h1 className='text-[#5A88FC] font-serif text-xl md:text-4xl p-4 mb-6 py-4 md:p-6 rounded-lg '>Causas y Efectos del Insomnio</h1>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
        El insomnio se da por diversos motivos. En general nos puede llevar a tener problemas para dormir las preocupaciones y el estrés, la ansiedad, la ira, el miedo, la tristeza, los malos hábitos de sueño, 
        determinadas enfermedades y medicamentos, la edad, el sedentarismo y el uso de pantallas. <br /><br />
        </p>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
        Escucha el programa de Ángeles Caballero de Onda Cero sobre las causas que producen mal dormir:  <br />
        <br />
       
        <a className='underline' href="https://www.ondacero.es/programas/mas-de-uno/audios-podcast/que-sabemos/mal-dormir-causas-formas-poner-fin-noches-vela_20220207620117b7f6a5490001dd3f8d.html" target='_blank' rel="noreferrer">Para escuchar el programa dar Click Aquí</a>
        </p>

      </div>
    </>
  )
}

export default Efectos
