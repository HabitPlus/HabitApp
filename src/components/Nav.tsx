import React from 'react'
import home from '../assets/home-icon.svg'
import contact from '../assets/contact-icon.svg'
import { Link } from 'react-router-dom'

const Nav : React.FC = () => {
  return (
    <div>
        <footer className="bg-orange text-white flex flex-row-1 items-center fixed bottom-0 justify-center h-20 gap-32
    backdrop-blur-sm w-full box-border md:hidden">
        <div>
        <Link to={'/home'}><img className="cursor-pointer" src={home} alt="" /></Link>
        </div>

        <div>
        <Link to={'/contact'}><img className="cursor-pointer" src={contact} alt="" /></Link>
        </div>
        </footer>
    </div>
  )
}

export default Nav