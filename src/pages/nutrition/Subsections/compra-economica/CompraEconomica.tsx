import React from 'react'
import YouTube from 'react-youtube'
import { BackButton } from '../../../../components/Arrow'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Nav from '../../../../components/Nav'

const CompraEconomica = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav />
      <>
        <div className="text-6xl">
          <h1 className='text-green-font font-serif text-center md: text-3xl font-semibold mt-14 tracking-widest'>La compra más económica</h1>
        </div>
        <article className='flex flex-col text-white text-center font-normal text-xl m-10 p-4 mb-6 py-4 md:p-6 md:text-4xl bg-green-font rounded-3xl'>
          <h1>¿Cómo ahorrar en la compra de alimentos? </h1>
        </article>
        <article className='grid grid-rows-1 p-10 md:text-2xl'>
          <p> Elegir el qué y dónde se compra puede ser una clave para el ahorro. Para que nuestra compra pueda ser más económica, los expertos recomiendan:<br></br></p>
          <p className='mt-3'>•	Apostar por marcas blancas en aquellos productos en los que no se note la diferencia. <br></br></p>
          <p className='mt-3'>•	Elegir supermercados que son más económicos. La OCU publica un listado de estos. <br></br></p>
          <p className='mt-3'>•	Hacer una lista detallada con lo que se necesita antes de ir a comprar y seguirla sin dejarse llevar por tentaciones u ofertas. <br></br></p>
          <p className='mt-3'>•	Evitar ir a comprar con hambre. <br></br></p>
          <p className='mt-3'>•	Comparar los precios de los productos similares. <br></br></p>
          <p className='mt-3'>•	Aprovechar lo que ya se tiene en casa. <br></br></p>
          <p className='mt-3'>•	Aprovechar productos de temporada. <br></br></p>
          <p className='mt-3'>•	Aprovechar tarjetas de fidelización y descuentos. <br></br></p>
          <p className='mt-3'>•	Revisar los tíquets de la compra después de pagar. <br></br></p>
          <p className='mt-3'>•	Realizar una compra semanal. <br></br></p>
          <p className='mt-3'>Mira el siguiente video de Paula Simple que explica estas y otras claves:<br></br></p>
        </article>
        <article className='grid grid-cols-1 justify-center'>
           <YouTube videoId='https://www.youtube.com/watch?v=MlcH1TocMSA'/>
        </article>
      </>
    </>
  )
}

export default CompraEconomica