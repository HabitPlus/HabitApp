import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'
import Footer from '../../../../components/footer/Footer'

const Insomnio = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#5A88FC'} />
      <Footer bgColor={"#5A88FC"} />
      
      <div className='flex flex-col items-center justify-center text-center mt-8 px-8 md:px-72 mb-20'>
        <h1 className='text-[#5A88FC] font-serif text-xl md:text-4xl p-4 mb-6 py-4 md:p-6 rounded-lg '>¿ Qué es el Insomnio ?</h1>
        <div className='text-black text-justify text-lg md:text-xl leading-8'>
          <p >
            El insomnio es una dificultad para dormir y puede manifestarse de diferentes maneras:<br /><br />
            a)	Cuesta dormirse al meterse en la cama,<br />
            b)	Cuesta mantener determinadas horas de sueño (por ejemplo, sólo conseguimos dormir 3-4 horas seguidas) o,<br />
            c)	El sueño se interrumpe y se producen múltiples despertares.
            <br /><br />
          </p>
          <p>
            Cualquiera de estas situaciones produce una sensación de cansancio y de no haber dormido bien. Suele afectar con más frecuencia a mujeres adultas (40% más en mujeres que en hombres), aunque cada vez es más frecuente en hombres y en niños/as y adolescentes (en parte debido a malos hábitos, como el uso de pantallas). En la población en general, entre el 25 y el 35% de las personas sufren insomnio, es decir, una de cada tres personas tiene problemas para dormir.
            <br /><br />
          </p>
          <p className='mb-20'>
            Escucha el siguiente podcast que habla de porqué no podemos dormir:<br /><br />
            <a className='bg-blue' href="https://www.iepp.es/insomnio-no-puedo-dormir/" target='_blank' rel="noreferrer">Para escuchar el podcast dar Click Aquí</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Insomnio
