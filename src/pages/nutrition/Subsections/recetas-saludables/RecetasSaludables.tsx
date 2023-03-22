import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'

type Props = {}

const RecetasSaludables = (props: Props) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#53B965'} />
      <>
        <div className='flex flex-col mt-6 ml-6 mr-6 gap-8 items-center justify-center mb-20'>
          <div className="text-6xl">
            <h1 className='text-green-font font-serif text-center md: text-3xl font-semibold mt-14 tracking-widest'>Recetas saludables</h1>
          </div>
          <article className='grid grid-rows-1 md:text-xl lg:mx-72'>
            <p>Càritas a preparado para ti un manual que contiene un taller de cocina casera y muchas recetas deliciosas para que aprendas a comer saludable, puedes descargarlo dando click en el siguiente enlace:</p>
          </article>
          <div className='mt-8 '>
            <a className='bg-green mb-32 md:text-xl text-base mt-2' href='./recetario-càritas.pdf' download>
              Descargar Recetario Càritas
            </a>
          </div>
        </div>
      </>
    </>
  )
}

export default RecetasSaludables