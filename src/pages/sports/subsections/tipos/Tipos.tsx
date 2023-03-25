import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Footer from '../../../../components/footer/Footer'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'

const Tipos = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#FFC727'} />
      <Footer bgColor={'#FFC727'} />
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0 mb-40'>
        <h1 className='text-black font-serif text-2xl md:text-3xl p-4 mb-6 py-4 md:p-6 text-[#FFC727] rounded-lg '>TIPOS DE ACTIVIDAD FÍSICA</h1>
        <div className='grid grid-rows-1 md:text-lg lg:mx-72 text-justify'>
          <p>Existen diferentes formas de ejercitarnos físicamente, como las
            que se pueden observar a continuación:</p>
          <h2 className='text-black text-center md:text-lg mt-4 mb-4'>ACTIVIDADES AERÓBICAS</h2>
          <ul>
            <li className='text-black text-justify md:text-lg'>
              El cuerpo se nutre del consumo de oxígeno para llevarlas a cabo,
              quemando hidratos y grasas.</li>
            <li className='text-black text-justify md:text-lg'>Son de baja, media o alta intensidad.</li>
            <li className='text-black text-justify md:text-lg'>
              Ejemplos: caminar, correr, bicicleta, bailar, nadar y patinar.</li>
          </ul>
          <h2 className='text-black text-center md:text-lg mt-4 mb-4'>ACTIVIDADES ANAERÓBICAS</h2>
          <ul>
            <li className='text-black text-justify md:text-lg'>
              Son ejercicios de alta intensidad y poca duración.</li>
            <li className='text-black text-justify md:text-lg'>
              Se desarrollan músculos sin consumo de oxígeno.</li>
            <li className='text-black text-justify md:text-lg'>
              Ejemplos: abdominales, sentadillas, levantamiento de pesas,
              carreras cortas a gran velocidad, gimnasia artística o flexiones.</li>
          </ul>
          <h2 className='text-black text-justify md:text-lg mt-4'>La Fundación Española del Corazón y la Sociedad Española de
            Cardiología (2019),recomiendan lo siguiente.</h2>
        </div>
      </div>
    </>
  )
}

export default Tipos;