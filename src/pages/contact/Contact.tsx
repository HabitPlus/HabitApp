import React from 'react'
import { BackButton } from '../../components/arrow/Arrow'
import Header from '../../components/header/Header'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'

interface contactProps {
  backgroundColor: String;
}

const contact: React.FC<contactProps> = (backgroundColor) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={"#cc1126"} />
      <Footer bgColor={"#cc1126"} />
      <div className='mt-32 md:mt-10 flex flex-col text-red text-center px-8'>
        <h1 className='text-3xl my-14 font-serif text-center'>Contacta con Càritas</h1>
        <p>Dirección: C/Armenteres, 35, 08980, Sant Feliu de Llobregat</p>
        <a href="mailto:habitsplus@caritassantfeliu.cat?body=My custom mail body"><h3 className='my-6 text-lg'>E-mail: habitsplus@caritassantfeliu.cat</h3></a>
        <a href="tel:+34 936 255 770"><h3 className='text-lg'>Ó llamando al +34 936 255 770</h3></a>
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