import React from 'react'
import { Link } from 'react-router-dom'
import chica from '../../assets/girl-home1.svg'
import logo from '../../assets/logo-caritas.png'

const Landing = () => {
  return (
<div className='flex flex-col 1 place-content: center'>
  <img src={logo} alt="chica-corriendo" /> <br />
  <img src={chica} alt="" />
<br />  
  <Link to="/home" className='font-serif text-white font-weight: 600 bg-orange rounded-xl p-3 tracking-[1em] place-content-center'>Habit+</Link>
  </div>
  )
}

export default Landing