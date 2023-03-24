import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'
import Footer from '../../../../components/footer/Footer'

type Props = {}

const RecetasSaludables = (props: Props) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#53B965'} />
      <Footer bgColor={'#53B965'}  />
      
        <div className='flex flex-col items-center justify-center mb-20 text-justify'>
          <div className="">
            <h1 className='text-green-font font-serif text-center text-2xl md:text-3xl font-semibold mt-14'>Recetas saludables</h1>
          </div>
          <article className='grid grid-rows-1 mr-8 ml-8 mt-8 md:text-lg lg:mx-72'>
            <p>Càritas a preparado para ti un manual que contiene un taller de cocina casera y muchas recetas deliciosas para que aprendas a comer saludable, puedes descargarlo dando click en el siguiente enlace:</p>
          </article>
          <div className='mt-8 '>
            <a className='underline mb-32 md:text-lg text-base mt-2' href='./recetario-càritas.pdf' download>
              Descargar Recetario Càritas
            </a>
          </div>
        </div>
      </>
  )
}

export default RecetasSaludables