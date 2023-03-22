import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'
import dormirbien from '../../../../assets/sleep/dormirbien.jpg'

const Dormir = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#5A88FC'} />
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0 mb-20'>
        <h1 className='text-[#5A88FC] font-serif text-xl md:text-4xl p-4 mb-6 py-4 md:p-6 rounded-lg '>El Dormir Bien</h1>
        <div className='text-black text-justify text-lg md:text-xl lg:mx-72 leading-8'>
          <p>
            Dormir bien es una necesidad del ser humano pues el sueño permite que nuestro cuerpo se recupere del desgaste del día a día. No todo el mundo necesita dormir las mismas horas y con la vida van cambiando nuestras necesidades de horas de sueño. <br /><br />
          </p>
          <img src={dormirbien} alt='Dormir bien' className='my-8 w-full md:w-auto max-h-96 lg:mx-40' />
          <p>
            Dormir bien no es sólo dedicarle un número de horas, ni demasiadas más, ni menos, es también tener unos hábitos a la hora de ir a dormir.
          </p>
        </div>
      </div>
    </>
  )
}

export default Dormir
