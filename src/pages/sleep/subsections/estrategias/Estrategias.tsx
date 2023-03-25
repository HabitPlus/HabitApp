import React from 'react'
import { BackButton } from '../../../../components/arrow/Arrow'
import Header from '../../../../components/header/Header'
import Nav from '../../../../components/nav/Nav'
import Footer from '../../../../components/footer/Footer'

const Estrategias = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#5A88FC'} />
      <Footer bgColor={'#5A88FC'} />
      
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0 mb-20 lg:mx-72'>
        <h1 className='text-[#5A88FC] font-serif text-xl md:text-3xl p-4 mb-6 py-4 md:p-6  rounded-lg '>Estrategias para Favorecer el Sueño</h1>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
          Existen una serie de técnicas y ejercicios que favorecen el dormir. <br /><br />
          Te señalamos algunos útiles para poder llegar a dormir bien. <br />
        </p>
        <table className='table-auto block'>
          <thead>
            <tr>
              <th className='border px-2 py-2'>Técnica</th>
              <th className='border px-2 py-2'>Ejercicio</th>
              <th className='border px-2py-2'>Remedio</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td className='border px-2 py-2 underline'><a href='https://www.youtube.com/watch?v=0VQbDKAj6Rg' target='_blank' rel="noreferrer">Técnica de 4-7-8</a></td>
              <td className='border px-2 py-2 underline'><a href='https://www.youtube.com/watch?v=-FgcI0iYJQc' target='_blank' rel="noreferrer">Respiración abdominal</a></td>
              <td className='border px-2 py-2 underline'><a href='https://www.youtube.com/results?search_query=meditaci%C3%B3n' target='_blank' rel="noreferrer">Meditación</a></td>
            </tr>
            <tr>
              <td className='border px-2 py-2 underline'><a href='https://www.youtube.com/watch?v=kz00kzBYaec' target='_blank' rel="noreferrer">Tiempo para preocuparse</a></td>
              <td className='border px-2 py-2 underline'><a href='https://www.youtube.com/watch?v=VrGEGPY02NE' target='_blank' rel="noreferrer">Autoafirmaciones positivas</a></td>
              <td className='border px-2 py-2 underline'><a href='https://www.youtube.com/watch?v=ii9CPDrx7J0' target='_blank' rel="noreferrer">Visualización</a></td>
            </tr>
            <tr>
              <td className='border px-2 py-2 underline'><a href='https://www.osiaraba.eus/infopacientes/documentos/servicios/neumologia/sueno/hojasinfo/cas/REG-SUE%C3%91O-01%20Agenda%20de%20Sue%C3%B1o.pdf' target='_blank' rel="noreferrer">Diario de sueño y vigilia</a></td>
              <td className='border px-2 py-2 underline'><a href='https://www.telva.com/bienestar/salud/2023/01/17/63c67a2901a2f1e7208b45eb.html' target='_blank' rel="noreferrer">Paseo mental</a></td>
              <td className='border px-2 py-2 underline'><a href='https://www.bachrescue.com/es-es/explora/blog/2021/remedios-para-combatir-el-insomnio-y-domir-mejor/' target='_blank' rel="noreferrer">Remedios caseros para dormir</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Estrategias