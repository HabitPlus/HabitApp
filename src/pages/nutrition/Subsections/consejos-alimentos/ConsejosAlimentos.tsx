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
        <article className='grid grid-rows-1 justify-center items-center'>
          <img className='items-center w-3/4' src={consejos} />
        </article>
      </>
    </>
  )
}

export default ConsejosAlimentos