import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'
import piramide from '../../../../assets/nutrition/piramide.svg'
import Footer from '../../../../components/footer/Footer'

const CocinaSaludable = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#53B965'} />
      <Footer bgColor={'#53B965'} />
      
      <div className='mb-20'>
          <h1 className='text-green-font font-serif text-center text-2xl md:text-3xl font-semibold mt-14'>Cocina saludable</h1>

        <article className='grid grid-rows-1 indent-2 md:text-lg mt-8 px-8 lg:mx-72 text-justify'>
          
            <p className='italic'>“Que tu medicina sea tu alimento y el alimento sea tu medicina”.</p>
            <p>Hipócrates (S. V. a.c.),</p><br />

            <p>¿Qué se considera comida saludable? La comida saludable es aquella que nos aporta bienestar y salud y tiene que ver con lo que comemos y cómo lo comemos.
            ¿Qué alimentos debo comer? Una buena dieta es la que incluye todo tipo de alimentos. En la pirámide de alimentación saludable se puede ver qué tipo de alimentos se deben comer de forma más frecuente (abajo) y los que sólo de forma puntual (arriba).
          </p>
        </article>
        <article className='grid grid-rows-1 justify-center p-8'>
          <img src={piramide} alt='Piramide de alimentos' />
        </article>
        <article className='grid grid-rows-1 mt-8 px-8 indent-2 md:text-lg lg:mx-72 text-justify'>
          <p className='mb-20'> Se debe comer más alimentos de origen vegetal frescos -a poder ser-, como:  frutas, verduras, semillas, frutos secos, cereales y legumbres. Buscar alimentos integrales y usar técnicas de cocina como el vapor, el horno, el salteado, la parrilla o el asado.
            Es igualmente importante, comer cinco veces al día, en el mismo horario y tratar de no picar entre horas. Una alimentación saludable reduce el riesgo de enfermedades en el futuro.
          </p>
        </article>
      </div>
      
    </>
  )
}

export default CocinaSaludable