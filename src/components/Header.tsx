import React from 'react'
import logo from '../assets/logo-caritas.svg'


const Header: React.FC = () => {
  return (
    <div className='flex flex-row justify-center absolute mt-14 '>
        <img className='w-1/3' src={logo} alt='Cáritas'/>
    </div>
  )
}

export default Header