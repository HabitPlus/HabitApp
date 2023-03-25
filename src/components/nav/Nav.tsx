import React from 'react';
import home from '../../assets/general/home-icon.svg';
import contact from '../../assets/general/contact-icon.svg';
import { Link } from 'react-router-dom';

interface NavProps {
  bgColor: string;
}
const Nav: React.FC<NavProps> = ({ bgColor }) => {
  return (
    <div>
      <footer className={`text-white flex items-center justify-center h-16 gap-24
        backdrop-blur-sm w-full box-border fixed bottom-0 md:hidden`}
        style={{ backgroundColor: bgColor }}>
        <div className='flex flex-col translate-y-1'>
          <Link to={'/home'}>
            <img className="cursor-pointer w-6 translate-x-1" src={home} alt="Inicio" />
          </Link>
          <h6>Inicio</h6>
        </div>
        <div className='flex flex-col translate-y-1'>
          <Link to={'/contact'}>
            <img className="cursor-pointer w-6 translate-x-6" src={contact} alt="contact" />
          </Link>
          <h6>Contacto</h6>
        </div>
      </footer>
    </div>
  );
};
export default Nav;
