import React from 'react'
import { BackButton } from '../../components/Arrow'
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
    </>
  )
}

export default Nutricion