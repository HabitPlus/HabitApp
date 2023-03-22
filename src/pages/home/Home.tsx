import React from "react";
import { Link } from "react-router-dom";
import nutricion from "../../assets/nutrition/nutricion.svg";
import sleep from "../../assets/general/sleep.svg";
import saludmental from "../../assets/saludmental/salud-mental.svg";
import deporte from "../../assets/general/deporte.svg";
import { BackButton } from "../../components/arrow/Arrow";
import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={"orange"} />

      <h1 className='text-orange font-serif text-center text-4xl md:text-5xl font-semibold mt-10 tracking-widest'>Habit +</h1>
      <div className="flex justify-center items-center mt-12 md:mt-24">
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 md:gap-8">
          <Link to="/nutricion">
            <button className="p-2 w-full h-52 md:h-72 bg-green rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-4">
              <img
                className="w-30 md:w-40 md:mb-6"
                src={nutricion}
                alt="nutrición"
              />
              <p className="text-black text-xl md:text-3xl mb-5">Nutrición</p>
            </button>
          </Link>
          <Link to="/sueño">
            <button className="p-2 w-full h-52 md:h-72 bg-blue rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-2">
              <img
                className="w-24 md:w-32 mt-2 md:mt-5"
                src={sleep}
                alt="sueño"
              />
              <p className="text-black text-xl md:text-3xl md:mb-4">Sueño</p>
            </button>
          </Link>
          <Link to="/salud-mental">
            <button className="p-2 w-full h-52 md:h-72 bg-purple rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-5">
              <img
                className="w-32 md:w-40 mt-2 md:mt-5"
                src={saludmental}
                alt="salud mental"
              />
              <p className="text-black text-xl md:text-3xl">Salud mental</p>
            </button>
          </Link>
          <Link to="/deporte">
            <button className="p-2 w-full h-52 md:h-72 bg-yellow rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-4">
              <img className="w-32 md:w-40" src={deporte} alt="deporte" />
              <p className="text-black text-xl md:text-3xl ">Deporte</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
