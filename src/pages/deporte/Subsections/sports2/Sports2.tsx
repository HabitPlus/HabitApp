import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports2 = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#FFC727'} />
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0'>
        <h1 className='text-black font-serif text-3xl md:text-4xl p-4 mb-6 py-4 md:p-6 text-[#FFC727] rounded-lg '>TIPOS DE ACTIVIDAD FÍSICA</h1>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
          Existen diferentes formas de ejercitarnos físicamente, como las
          que se pueden observar en el cuadro a continuación.
        </p>
        <h2 className='text-black text-justify text-lg md:text-xl leading-8'>ACTIVIDADES AERÓBICAS</h2>
        <ul>
          <li className='text-black text-justify text-lg md:text-xl leading-8'>
            El cuerpo se nutre del consumo de oxígeno para llevarlas a cabo,
            quemando hidratos y grasas.</li>
          <li className='text-black text-justify text-lg md:text-xl leading-8'>Son de baja, media o alta intensidad.</li>
          <li className='text-black text-justify text-lg md:text-xl leading-8'>
            Ejemplos: caminar, correr, bicicleta, bailar, nadar y patinar.</li>
        </ul>
        <h2 className='text-black text-justify text-lg md:text-xl leading-8'>ACTIVIDADES ANAERÓBICAS</h2>
        <ul>
          <li className='text-black text-justify text-lg md:text-xl leading-8'>
            Son ejercicios de alta intensidad y poca duración.</li>
          <li className='text-black text-justify text-lg md:text-xl leading-8'>
            Se desarrollan músculos sin consumo de oxígeno.</li>
          <li className='text-black text-justify text-lg md:text-xl leading-8'>
            Ejemplos: abdominales, sentadillas, levantamiento de pesas,
            carreras cortas a gran velocidad, gimnasia artística o flexiones.</li>
        </ul>
        <h2 className='text-black text-justify text-lg md:text-xl leading-8'>La Fundación Española del Corazón y la Sociedad Española de
          Cardiología (2019),recomiendan lo siguiente.</h2>
      </div>
      <Footer />
    </>
  )
}

export default Sports2