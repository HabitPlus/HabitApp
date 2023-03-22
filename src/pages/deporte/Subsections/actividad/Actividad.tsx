import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/footer/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports4 = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#FFC727'} />
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0 mb-20'>
        <h1 className='text-black font-serif text-xl md:text-4xl p-4 mb-6 py-4 md:p-6 text-[#FFC727] rounded-lg '>ACTIVIDAD FÍSICA EN EL ENTORNO</h1>
      </div>
      <div className='justify-center p-8 text-justify text-base lg:mx-72 indent-6 mb-20 text-black md:text-xl md:text-left '>
        <p>
          Apuntarse a un gimnasio no es la única opción para
          hacer ejercicio. Hay muchas propuestas que se pueden
          hacer en casa o en nuestro barrio. Puedes consultar el
          siguiente documento: <a className='bg-blue' href="http://www.estilosdevidasaludable.mscbs.gob.es/actividadFisica/" target='_blank' rel="noreferrer">Click Aquí</a>.</p> <br />
        <p> Descargate aplicaciones gratuitas: Mi Fit, Strava, Pedometer,
          Period Traker, Health Sync, Step Tracker o Gym Fitness
          & Workout y para IOS, MGerhonte, Strava,Fitness Coach
          y Home Workout. O, ver videos o seguir canales de youtube:
          Gym Virtual, Vitónica,FitnessBlender y Xuan Lan Yoga.
        </p>
      </div>
      <Footer />
    </>
  )
}
export default Sports4