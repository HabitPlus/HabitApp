import React from 'react'
import { Link } from 'react-router-dom'
import chica from '../../assets/girl-home1.svg'
import logo from '../../assets/logo-caritas.png'

const Landing = () => {
  return (
<div className='flex flex-col 1'>
  <img src={logo} alt="chica-corriendo" />
  <img src={chica} alt="" />
 
  <Link to="/home">
    <button className='font-serif text-white font-weight: 600 bg-orange rounded-full p-3 w-64 h-10
    tracking-[1em]'>Habit+
      </button>
  </Link>
  
</div>
  )
}

export default Landing