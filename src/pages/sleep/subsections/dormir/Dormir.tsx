import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'
import dormirbien from '../../../../assets/sleep/dormirbien.jpg'
import Footer from '../../../../components/footer/Footer'

const Dormir = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#5A88FC'} />
      <Footer bgColor={'#5A88FC'} />
      <div className='mb-20'>
        <div className="mt-14">
          <h1 className='text-[#5A88FC] font-serif text-center text-2xl md:text-3xl font-semibold '>El Dormir Bien</h1>
        </div>
        <article className='grid grid-rows-1 md:text-xl mt-4 px-8 lg:mx-72 indent-2 text-justify'>
          <p>
            Dormir bien es una necesidad del ser humano pues el sueño permite que nuestro cuerpo se recupere del desgaste del día a día. No todo el mundo necesita dormir las mismas horas y con la vida van cambiando nuestras necesidades de horas de sueño. <br /><br />
          </p>
        </article>
        <article className='grid grid-rows-1 justify-center p-8 '>
          <img src={dormirbien} alt='Piramide de alimentos' className='my-8 w-full md:w-auto max-h-96 lg:mx-96' />
        </article>
        <article className='grid grid-rows-1 mt-4 px-8 md:text-xl lg:mx-72 indent-2 text-justify'>
          <p className='mb-20'>
            Dormir bien no es sólo dedicarle un número de horas, ni demasiadas más, ni menos, es también tener unos hábitos a la hora de ir a dormir.
          </p>
        </article>
      </div>

    </>
  )
}

export default Dormir
