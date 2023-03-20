import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports4 = () => {
  return (
    <>
    <Header/>
    <BackButton/>
    <Nav/>
    <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0'>
      <h1 className='text-black font-bold text-xl md:text-4xl p-4 mb-6 py-4 md:p-6 bg-yellow rounded-lg '>ACTIVIDAD FÍSICA EN EL ENTORNO</h1>  
    
      <p className='text-black text-justify text-lg md:text-xl leading-8'>
      Apuntarse a un gimnasio no es la única opción para 
      hacer ejercicio. Hay muchas propuestas que se pueden
      hacer en casa o en nuestro barrio. Puedes consultar el 
      siguiente documento: http://www.estilosdevidasaludable.mscbs.gob.es/actividadFisica/
      Decargarte aplicaciones gratuitas: Mi Fit, Strava, 
      Pedometer, Period Traker, Health Sync, Step Tracker 
      o Gym Fitness & Workout y para IOS, MGerhonte, Strava,
      Fitness Coach y Home Workout. O, ver videos o seguir
      canales de youtube: Gym Virtual, Vitónica,FitnessBlender 
      y Xuan Lan Yoga.
      </p>
    </div>

    <Footer/>
    </>
  )
}

export default Sports4