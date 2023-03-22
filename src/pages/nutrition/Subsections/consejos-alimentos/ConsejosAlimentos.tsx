import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'
import consejos from '../../../../assets/nutrition/consejos.png'

type Props = {}

const ConsejosAlimentos = (props: Props) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#53B965'} />

      <div className='flex flex-col items-center justify-center'>
        <div className="text-6xl">
          <h1 className='text-green-font font-serif text-center md: text-3xl font-semibold mt-14 tracking-widest'>Consejos para aprovechar los alimentos</h1>
        </div>
        <div className='mr-4 ml-4'>
          <img className='' src={consejos} alt='' />
        </div>
        <p className='mt-10 justify-center mr-8 ml-8 md:text-2xl text-sm'>FUENTE: SOSTENIBILIDAD PARA TODOS</p>
        <a className='bg-green mt-3 mb-32 md:text-xl text-sm' href="https://www.sostenibilidad.com/vida-sostenible/desperdicio-de-comida-que-es-y-como-evitarlo/?_adin=02021864894" target='_blank' rel="noreferrer">Click Aqui</a>
      </div>
    </>
  )
}

export default ConsejosAlimentos