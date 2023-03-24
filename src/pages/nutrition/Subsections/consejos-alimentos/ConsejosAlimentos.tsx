import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'
import consejos from '../../../../assets/nutrition/consejos.png'
import Footer from '../../../../components/footer/Footer'

type Props = {}

const ConsejosAlimentos = (props: Props) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#53B965'} />
      <Footer bgColor={'#53B965'} />
      
      <div className='flex flex-col items-center justify-center'>
        <div className="text-6xl">
          <h1 className='text-green-font font-serif text-center text-3xl md:text-4xl font-semibold mt-14'>Consejos para aprovechar los alimentos</h1>
        </div>
        <div className='mr-4 ml-4'>
          <img className='' src={consejos} alt='' />
        </div>
        <p className='justify-center mt-8 px-8 md:text-2xl text-sm'>FUENTE: SOSTENIBILIDAD PARA TODOS</p>
        <a className='bg-green mt-3 mb-32 md:text-xl text-sm' href="https://www.sostenibilidad.com/vida-sostenible/desperdicio-de-comida-que-es-y-como-evitarlo/?_adin=02021864894" target='_blank' rel="noreferrer">Click Aqui</a>
      </div>
    </>
  )
}

export default ConsejosAlimentos