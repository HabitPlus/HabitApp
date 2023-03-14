import React from 'react'
import home from '../assets/home-icon.svg'
import contact from '../assets/contact-icon.svg'


const Footer : React.FC = () => {
  return (
    <>
        {/* <footer className="hidden md:flex flex-col fixed bottom-0 justify-center items-center h-32 backdrop-blur-sm 
    w-full box-border">
      <p>© Bon Appétit Social App</p>
      <ul className="flex flex-row my-2">
        <li>Contact Us </li>&nbsp;-&nbsp;<li>Privacy Policy </li>&nbsp;-&nbsp;
        <li>Terms of Use</li>
      </ul>
      <div className="flex flex-row gap-3 mt-1">
        <img className="cursor-pointer" src={iconMail} alt="Mail" />
        <img className="cursor-pointer" src={iconShare} alt="Share" />
        <img className="cursor-pointer" src={iconInstagram} alt="Instagram" />
        <img className="cursor-pointer" src={iconTwitter} alt="Twitter" />
      </div>
    </footer> */}

    <footer className="bg-orange text-white hidden md:flex flex-col fixed bottom-0 justify-center items-center h-32 
    backdrop-blur-sm w-full box-border">
      <p>Dirección: C/ Armenteres, 35, 08980 - Sant Feliu de Llobregat</p>
      <h1>© Habit+ 2023</h1>
      <div className="flex flex-row gap-3 mt-1">
        <img className="cursor-pointer" src={home} alt="Mail" />
        <img className="cursor-pointer" src={contact} alt="Share" />
      </div>
    </footer>

    </>
  )
}

export default Footer