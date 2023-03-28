import React from 'react'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'
import imgHabitos from '../../../../assets/sleep/imgHabitos.jpg'
import { BackButton } from '../../../../components/arrow/Arrow'
import Footer from '../../../../components/footer/Footer'

const Habitos = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#5A88FC'} />
      <Footer bgColor={'#5A88FC'} />

      <div className='flex flex-col items-center justify-center text-center mt-8 px-8 md:px-72 mb-20'>
        <h1 className='text-[#5A88FC] font-serif text-2xl md:text-3xl p-4 py-4 md:p-6 rounded-lg '>Hábitos para Dormir Bien</h1>
        <img src={imgHabitos} alt='Dormir bien' className='my-8 w-full md:w-auto max-h-96' />
        <div className='text-black text-justify text-lg md:text-xl indent-2'>
          <p>Fuente:
            <a href="https://farmaadicta.com/salud/enfermedades/higiene-del-sueno-infografia/" target='_blank' rel="noreferrer" className='underline'> Dar click aqui</a>
          </p><br />
          <p className='mb-20 text-lg'>
            Puedes seguir también estos consejos para establecer lo que se denomina RUTINA DEL SUEÑO: <br /><br />
            <ul className='list-disc'>
            <li> Darse un baño caliente con sales de lavanda o de Epson. </li>
            <li>Evitar pantallas</li>
            <li>Tomar una cena ligera</li>
            <li>Un vaso de leche caliente antes de dormir</li>
            <li>Y tener un lugar lo máximo de cómodo posible para dormir.</li>
            </ul>
          </p>
        </div>
      </div> 
    </>
  )
}

export default Habitos
