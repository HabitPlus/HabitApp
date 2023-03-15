import React from 'react';
import { Link } from 'react-router-dom';
import nutrition from '../../assets/nutrition.svg';
import sleep from '../../assets/sleep.svg';
import saludmental from '../../assets/salud-mental.svg';
import deporte from '../../assets/deporte.svg';

const Home = () => {
  return (
    <div className="bg-yellow  ">
      <div className="flex-rows-2 gap-4 md:gap-8 grid grid-cols-2 md:grid-cols-4 ">
        <Link to='/nutricion'>
          <button className="w-64 h-72 bg-blue rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center">
            <img className=''src={nutrition} alt="nutrición" />
            <p className="text-white">Nutrición</p>
          </button>
        </Link>
        <Link to='/nutricion'>
          <button className="w-64 h-72 bg-purple rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center">
            <img className=''src={sleep} alt="sueño" />
            <p className="text-white">Sueño</p>
          </button>
        </Link>
        <Link to='/nutricion'>
          <button className="w-64 h-72 bg-orange rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center">
            <img className=''src={saludmental} alt="salud mental" />
            <p className="text-white">Salud mental</p>
          </button>
        </Link>
        <Link to='/nutricion'>
          <button className="w-64 h-72 bg-green rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center ">
            <img className=''src={deporte} alt="deporte" />
            <p className="text-white">Deporte</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;