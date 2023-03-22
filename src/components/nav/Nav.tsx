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
      <footer className={`text-white flex items-center justify-center h-16 gap-32
        backdrop-blur-sm w-full box-border fixed bottom-0 md:hidden`}
        style={{ backgroundColor: bgColor }}>
        <div>
          <Link to={'/home'}>
            <img className="cursor-pointer" src={home} alt="" />
          </Link>
        </div>
        <div>
          <Link to={'/contact'}>
            <img className="cursor-pointer" src={contact} alt="" />
          </Link>
        </div>
      </footer>
    </div>
  );
};
export default Nav;
