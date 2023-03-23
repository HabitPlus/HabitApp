import React from 'react'
import { BackButton } from '../../components/arrow/Arrow'
import Header from '../../components/header/Header'
import Nav from '../../components/nav/Nav'

interface contactProps {
  backgroundColor: String;
}

const contact: React.FC<contactProps> = (backgroundColor) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={"#cc1126"} />
      <div className='mt-32 flex flex-col items-center text-red'>
        <h1 className='text-3xl my-6 font-serif '>Contacta con Caritas</h1>
        <a href="mailto:habitsplus@caritassantfeliu.cat?body=My custom mail body"><h3 className='my-6 text-lg'>E-mail: habitsplus@caritassantfeliu.cat</h3></a>
        <a href="tel:PHONE_NUM"><h3 className='text-lg'>O llamando al +34 936 255 770</h3></a>
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