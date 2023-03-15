import React from 'react'
import { BackButton } from '../../components/Arrow'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

type Props = {}

const Nutricion = (props: Props) => {
  return (
    <>
    <div className='flex flex-col-2 items-center'>
    <BackButton/>
    <Header/>
    </div>
     
    <Nav/>
    
    <h1>Nutrición</h1>
    
    </>
  )
}

export default Nutricion