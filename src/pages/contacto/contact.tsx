import React from 'react'
import { BackButton } from '../../components/Arrow'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

interface contactProps{
    backgroundColor:String;
}

const contact:React.FC<contactProps> = (backgroundColor) => {
  return (
    <>
    <Nav/>
    <BackButton/>
    <Header />
    <div className='font-sans mt-14 flex flex-col items-center'>
    <h1 className='text-3xl my-6'>Contacta con Caritas</h1>
    <h3 className='my-6 text-lg'>habitsplus@caritassantfeliu.cat</h3>
    <h3 className='text-lg'>+34 936 255 770</h3>
      <style type="text/css">
        {`
          body {
            background-color: ${backgroundColor};
          }
        `}
      </style>
    </div>
    </>
  )
}

export default contact