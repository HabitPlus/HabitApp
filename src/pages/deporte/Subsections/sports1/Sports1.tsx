import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const Sports1 = () => {
  return (
    <>
    <BackButton/>
    <Header/>
    <Nav/>
    <div className='grid-rows-1 bg-yellow h-12 w-3/4 mt-10 rounded-xl md:w-1/2'> 
    <h1 className='text-white text-center p-1 md:text-3xl'>IMPORTANCIA DE LA ACTIVIDAD FÍSICA</h1>  
    </div>
    </>
  )
}

export default Sports1