import React from 'react'
import { Link } from 'react-router-dom'
import chica from '../../assets/girl-home1.svg'
import logo from '../../assets/logo-caritas.png'
import Header from '../../components/Header'
import './Landing.css'


const Landing = () => {
  return (
    <>
    <Header />
      <div className='flex flex-col items-center justify-center mx-4 h-screen -mt-16'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
          <img src={chica} alt="chica-corriendo" className='w-full h-auto md:w-2/3 chica-img' />
          <Link to="/home">
            <button className="mx-auto mt-8 font-serif text-white font-weight: 600 bg-orange hover:bg- rounded-full p-3 w-64 h-10 tracking-[1rem] mb-5 md:ml-10 transition-colors duration-300">
              Habit+
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Landing;