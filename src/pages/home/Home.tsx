import React from 'react';
import { Link } from 'react-router-dom';
import nutrition from '../../assets/nutrition.svg';
import sleep from '../../assets/sleep.svg';
import saludmental from '../../assets/salud-mental.svg';
import deporte from '../../assets/deporte.svg';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="gap-4 md:gap-8">
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 md:gap-8">
          <Link to='/nutricion'>
            <button className="w-full h-48 md:h-72 bg-blue rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center">
              <img className='w-1/2 md:w-3/4' src={nutrition} alt="nutrición" />
              <p className="text-white text-xs md:text-base">Nutrición</p>
            </button>
          </Link>
          <Link to='/nutricion'>
            <button className="w-full h-48 md:h-72 bg-purple rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center">
              <img className='w-1/2 md:w-3/4' src={sleep} alt="sueño" />
              <p className="text-white text-xs md:text-base">Sueño</p>
            </button>
          </Link>
          <Link to='/nutricion'>
            <button className="w-full h-48 md:h-72 bg-orange rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center">
              <img className='w-1/2 md:w-3/4' src={saludmental} alt="salud mental" />
              <p className="text-white text-xs md:text-base">Salud mental</p>
            </button>
          </Link>
          <Link to='/nutricion'>
            <button className="p-5 w-full h-52 md:h-72 bg-green rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-4">
              <img className='w-30 md:w-40' src={deporte} alt="deporte" />
              <p className="text-white text-xl md:text-3xl">Deporte</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;