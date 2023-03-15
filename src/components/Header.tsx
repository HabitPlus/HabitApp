import React from 'react'
import logo from '../assets/logo-caritas.svg'


const Header: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center absolute md:w-screen'>
        <img className='w-1/3 md:w-96 md:mt-32' src={logo} alt='Cáritas'/>
    </div>
  )
}

export default Header