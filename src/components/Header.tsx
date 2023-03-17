import React from 'react'
import logo from '../assets/logo-caritas.svg'


const Header: React.FC = () => {
  return (
    <header className='flex justify-center items-center mt-24 md:mt-32'>
        <img className='w-2/4 md:w-2/12' src={logo} alt='Cáritas'/>
    </header>
  )
}

export default Header