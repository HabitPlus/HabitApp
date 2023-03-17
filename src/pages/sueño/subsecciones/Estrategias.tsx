import React from 'react'
import { BackButton } from '../../../components/Arrow'
import Header from '../../../components/Header'
import Nav from '../../../components/Nav'

const Estrategias = () => {
  return (
    <>
    <Header/>
    <BackButton/>
    <Nav/>
    <div className='flex flex-col items-center mt-10'>
    <h1 className='text-black text-center h-fit w-fit p-2 bg-blue rounded-lg md:text-6xl md:p-6'>Estrategias para Favorecer el Sueño</h1>
    </div>
    

    </>
  )
}

export default Estrategias
