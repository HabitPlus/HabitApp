import React from 'react'
import logo from '../../assets/general/logo-caritas.svg'

const Header: React.FC = () => {
  return (
    <header className='flex justify-center relative items-center mt-10 md:w-screen md:mt-14'>
      <img className='w-52 md:w-72 ' src={logo} alt='Cáritas' />
    </header>
  )
}
export default Header