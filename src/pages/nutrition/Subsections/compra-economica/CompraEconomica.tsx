import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'
import Footer from '../../../../components/footer/Footer'

const CompraEconomica = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#53B965'} />
      <Footer bgColor={'#53B965'}  />
    
        <div className='flex flex-col items-center justify-center mb-20'>
          <div className="mr-8 ml-8">
            <h1 className='text-green-font font-serif text-center text-2xl md:text-3xl font-semibold mt-14'>La compra más económica</h1>
          </div>
          <article className='mt-8 px-8 md:text-lg lg:mx-72 text-justify list-disc'>
            <p> Elegir el qué y dónde se compra puede ser una clave para el ahorro. Para que nuestra compra pueda ser más económica, los expertos recomiendan:<br></br></p>
            <p className='mt-3'>Apostar por marcas blancas en aquellos productos en los que no se note la diferencia. <br></br></p>
            <p className='mt-3'>Elegir supermercados que son más económicos. La OCU publica un listado de estos. <br></br></p>
            <p className='mt-3'>Hacer una lista detallada con lo que se necesita antes de ir a comprar y seguirla sin dejarse llevar por tentaciones u ofertas. <br></br></p>
            <p className='mt-3'>Evitar ir a comprar con hambre. <br></br></p>
            <p className='mt-3'>Comparar los precios de los productos similares. <br></br></p>
            <p className='mt-3'>Aprovechar lo que ya se tiene en casa. <br></br></p>
            <p className='mt-3'>Aprovechar productos de temporada. <br></br></p>
            <p className='mt-3'>Aprovechar tarjetas de fidelización y descuentos. <br></br></p>
            <p className='mt-3'>Revisar los tíquets de la compra después de pagar. <br></br></p>
            <p className='mt-3'>Realizar una compra semanal. <br></br></p>
            <p className='mt-3'>Mira el siguiente video de Paula Simple que explica estas y otras claves:<br></br></p>
          </article>
          <a className= 'underline mb-32 md:text-xl text-base mt-2' href='https://www.youtube.com/watch?v=MlcH1TocMSA' target='_blank' rel="noreferrer">Click aquí</a>
        </div>
      </>
  )
}

export default CompraEconomica