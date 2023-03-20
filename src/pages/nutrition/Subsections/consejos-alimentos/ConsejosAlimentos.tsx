import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'
import consejos from '../../../../assets/nutrition/consejos.jpg'

type Props = {}

const ConsejosAlimentos = (props: Props) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#53B965'}/>
      <>
        <div className="text-6xl">
          <h1 className='text-green-font font-serif text-center md: text-3xl font-semibold mt-14 tracking-widest'>Consejos para aprovechar los alimentos</h1>
        </div>
        <article className='flex flex-col text-white text-center font-normal text-xl m-10 p-4 mb-6 py-4 md:p-6 md:text-4xl bg-green-font rounded-3xl'>
          <h1>¿Cómo evitar el desperdicio de comida? </h1>
        </article>
        <article className='grid grid-rows-1 justify-center md: w-full'>
          <img src={consejos} />
        </article>
      </>
    </>
  )
}

export default ConsejosAlimentos