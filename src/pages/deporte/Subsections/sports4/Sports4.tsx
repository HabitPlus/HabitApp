import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports4 = () => {
  return (
    <>
    <BackButton/>
    <Header/>
    <Nav/>
    <div className='flex justify-center mt-10'>
    <h1 className='text-black text-center h-fit w-fit p-2 bg-yellow rounded-lg md:text-3xl'>ACTIVIDAD FÍSICA EN EL ENTORNO</h1>  
    </div>
    <Footer/>
    </>
  )
}

export default Sports4