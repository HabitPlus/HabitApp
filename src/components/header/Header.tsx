import React from 'react'
import logo from '../../assets/general/logo-caritas.svg'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='flex justify-center relative items-center mt-14 md:w-screen'>
      <Link to={'/home'}>
        <img className='w-40 md:w-48 ' src={logo} alt='Cáritas' />
      </Link>
    </header>
  )
}
export default Header