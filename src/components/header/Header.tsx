import React from 'react'
import logo from '../../assets/general/logo-caritas.svg'

const Header: React.FC = () => {
  return (
    <header className='flex justify-center relative items-center mt-14 md:w-screen md:mt-14'>
      <img className='w-40 md:w-48 ' src={logo} alt='Cáritas' />
    </header>
  )
}
export default Header