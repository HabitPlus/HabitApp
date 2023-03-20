import React from 'react'
import { Link } from 'react-router-dom'
import chica from '../../assets/girl-home1.svg'
import Header from '../../components/Header'



const Landing = () => {
  return (
    <>
   <Header />
      <div className='flex flex-col items-center justify-center mx-4'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 mt-14'>
          <img src={chica} alt="chica-corriendo" className='w-full md:w-2/3 md:max-xl:' />
          <Link to="/home">
            <button className="mx-auto mt-8 font-serif text-white font-weight: 600 bg-orange hover:bg-red rounded-full p-3 w-64 h-10 tracking-[1rem] mb-5 md:ml-10 transition-colors duration-300">
              Habit+
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Landing;