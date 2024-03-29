import React from 'react'
import facebook from '../../assets/general/facebook.svg'
import instagram from '../../assets/general/instagram.svg'
import twitter from '../../assets/general/twitter.svg'
import youtube from '../../assets/general/youtube.svg'
import contact from '../../assets/general/contact-icon.svg'
import { Link } from 'react-router-dom'

interface NavProps {
  bgColor: string;
}
const Footer: React.FC<NavProps> = ({ bgColor }) => {
  return (
    <>
      <div>
        <footer className={'bg-orange text-white hidden md:flex flex-col fixed bottom-0 justify-center items-center h-24 w-full'}
          style={{ backgroundColor: bgColor }}>
          <div className='flex flex-cols-8 gap-80 text-base'>
            <div className='grid justify-center'>
              <p>Copyright 2023 © Habit+ </p>
              <p>Todos los derechos reservados </p>
            </div>
            <div className='flex flex-col translate-x-52'>
              <p>Contáctanos</p>
              <Link to={'/contact'}>
                <img className="cursor-pointer w-6 translate-x-9" src={contact} alt="contact" />
              </Link>
            </div>
            <div>
              <p>Síguenos </p>
              <div className='flex flex-cols gap-4'>
                <a href='https://www.facebook.com/caritassantfeliu?ref=hl' rel="nofollow noreferrer" target="_blank"><img src={facebook} alt="facebook"></img></a>
                <a href='https://www.instagram.com/caritassantfeliu/' rel="nofollow noreferrer" target="_blank"><img src={instagram} alt="instagram"></img></a>
                <a href='https://twitter.com/caritasantfeliu' rel="nofollow noreferrer" target="_blank"><img src={twitter} alt="twitter"></img></a>
                <a href='https://www.youtube.com/channel/UCZJa8nnpm3zyU77pPnJwfEA/videos' rel="nofollow noreferrer" target="_blank" ><img src={youtube} alt="youtube"></img></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
export default Footer