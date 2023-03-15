import React from 'react'
import logo from '../assets/logo-caritas.svg'


const Header: React.FC = () => {
  return (
    <div className='flex justify-center items-center absolute mt-24 md:w-screen md:mt-32'>
        <img className='w-2/4 md:w-64 ' src={logo} alt='Cáritas'/>
    </div>
  )
}

export default Header