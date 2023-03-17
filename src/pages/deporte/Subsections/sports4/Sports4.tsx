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
    <div className='flex flex-col items-center mt-10'>
    <h1 className='text-black text-center h-fit w-fit p-2 bg-yellow rounded-lg md:text-3xl'>ACTIVIDAD FÍSICA EN EL ENTORNO</h1>  
    </div>

    <div className='justify-center p-3'>
      <p className='text-justify md:text-6xl'>
      Apuntarse a un gimnasio no es la única opción para hacer ejercicio. Hay muchas <br />
      propuestas que se pueden hacer en casa o en nuestro barrio. <br />
      Puedes consultar el siguiente documento: <br />
      http://www.estilosdevidasaludable.mscbs.gob.es/<br />
      Decargarte aplicaciones gratuitas: Mi Fit, Strava, Pedometer, Period <br />
      Traker, Health Sync, Step Tracker o Gym Fitness & Workout y para IOS, <br />
      MGerhonte, Strava, Fitness Coach y Home Workout. <br />
      O, ver videos o seguir canales de youtube: Gym Virtual, Vitónica, <br />
      FitnessBlender y Xuan Lan Yoga.
      </p>
    </div>

    <Footer/>
    </>
  )
}

export default Sports4