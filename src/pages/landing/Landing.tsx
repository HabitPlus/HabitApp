import React from 'react'
import { Link } from 'react-router-dom'
import chica from '../../assets/girl-home1.svg'
import logo from '../../assets/logo-caritas.png'
import './Landing.css'


const Landing = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img src={logo} alt="logo" className='my-auto mx-auto w-full h-auto logo-img ' />
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <img src={chica} alt="chica-corriendo" className='w-full h-auto md:w-2/3 chica-img' />
        <Link to="/home">
  <button className="mx-auto mt-30 font-serif text-white font-weight: 600 bg-orange hover:bg-blue rounded-full p-3 w-64 h-10 tracking-[1rem] mb-5 md:ml-10 transition-colors duration-300">
    Habit+
  </button>
</Link>
      </div>
    </div>
  )
}

export default Landing;