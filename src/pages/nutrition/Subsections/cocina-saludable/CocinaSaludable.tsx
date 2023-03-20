import React from 'react'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'
import piramide from '../../../../assets/nutrition/piramide.svg'

const CocinaSaludable = () => {
  return (
    <>
      <Header />
      <BackButton />
      <>
        <div className="text-6xl mt-14">
          <h1 className='text-green-font font-serif text-center md: text-3xl font-semibold tracking-widest'>Cocina saludable</h1>
        </div>
        <article className='flex flex-col text-white text-center font-normal text-xl mt-10 mr-6 ml-6 mb-16 py-8 md:text-4xl bg-green-font rounded-3xl tracking-widest'>
          <h1>¿Qué se considera comida saludable? </h1>
        </article>
        <article className='grid grid-rows-1 md:text-2xl ml-6 mr-6'>
          <p>Dice Hipócrates (S V. a.c.), “Que tu medicina sea tu alimento y el alimento sea tu medicina”. ¿Qué se considera comida saludable? La comida saludable es aquella que nos aporta bienestar y salud y tiene que ver con lo que comemos y cómo lo comemos.
            ¿Qué alimentos debo comer? Una buena dieta es la que incluye todo tipo de alimentos. En la pirámide de alimentación saludable se puede ver qué tipo de alimentos se deben comer de forma más frecuente (abajo) y los que sólo de forma puntual (arriba).
          </p>
        </article>
        <article className='grid grid-rows-1 justify-center p-8 '>
          <img className='' src={piramide} />
        </article>
        <article className='grid grid-rows-1 ml-6 mr-6 md:text-2xl'>
          <p> Se debe comer más alimentos de origen vegetal frescos -a poder ser-, como:  frutas, verduras, semillas, frutos secos, cereales y legumbres. Buscar alimentos integrales y usar técnicas de cocina como el vapor, el horno, el salteado, la parrilla o el asado.
            Es igualmente importante, comer cinco veces al día, en el mismo horario y tratar de no picar entre horas. Una alimentación saludable reduce el riesgo de enfermedades en el futuro.
          </p>
        </article>
      </>
      <br></br>
      <Nav />
    </>
  )
}

export default CocinaSaludable