import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports2 = () => {
  return (
    <>
    <BackButton/>
    <Header/>
    <Nav/>
    <div className='flex justify-center mt-10'>
    <h1 className='text-black text-center h-fit w-fit p-2 bg-yellow rounded-lg md:text-6xl md:p-6'>TIPOS DE ACTIVIDAD FÍSICA</h1>  
    </div>
        
    <div className='justify-center p-5 mt-15'>  
      <p className='text-justify text-xl md:text-6xl'>
        Existen diferentes formas de ejercitarnos físicamente, como las <br />
        que se pueden observar en el cuadro a continuación.
      </p>
    
    <h2 className='text-justify text-xl md:text-6xl'>ACTIVIDADES AERÓBICAS</h2> 
    <ul>
      <li className='text-justify text-xl md:text-6xl'>
        El cuerpo se nutre del consumo de oxígeno para llevarlas a cabo, <br />
        quemando hidratos y grasas.</li>
      <li className='text-justify text-xl md:text-6xl'>Son de baja, media o alta intensidad.</li>
      <li className='text-justify text-xl md:text-6xl'>
        Ejemplos: caminar, correr, bicicleta, bailar, nadar y patinar.</li>
    </ul> 
    <h2 className='text-justify text-xl md:text-6xl'>ACTIVIDADES ANAERÓBICAS</h2>
    <ul>
      <li className='text-justify text-xl md:text-6xl'>
        Son ejercicios de alta intensidad y poca duración.</li>
      <li className='text-justify text-xl md:text-6xl'>
        Se desarrollan músculos sin consumo de oxígeno.</li>
      <li className='text-justify text-xl md:text-6xl'>
        Ejemplos: abdominales, sentadillas, levantamiento de pesas, <br />
      carreras cortas a gran velocidad, gimnasia artística o flexiones.</li>
    </ul>
    <h2>La Fundación Española del Corazón y la Sociedad Española de <br />
      Cardiología (2019),recomiendan lo siguiente.</h2>
    </div>

    
    <Footer/>
    </>
  )
}

export default Sports2