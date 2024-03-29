import React from "react";
import { Link } from "react-router-dom";
import nutricion from "../../assets/nutrition/nutricion.svg";
import sleep from "../../assets/general/sleep.svg";
import mentalhealth from "../../assets/mentalhealth/salud-mental.svg";
import deporte from "../../assets/general/deporte.svg";
import { BackButton } from "../../components/arrow/Arrow";
import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer'

interface DeporteProps {
  backgroundColor: string;
}
const Home: React.FC<DeporteProps> = ({ backgroundColor }) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={"orange"} />
      <Footer bgColor={'orange'}  />

      <h1 className='text-orange font-serif text-center text-3xl mt-[8%] md:mt-[2%] md:text-4xl font-semibold tracking-widest'>Habit +</h1>
      <div className="flex justify-center items-center mt-[8%] md:mt-[2%] 2xl:mt-[8%]">
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 md:gap-8 mr-8 ml-8">
          <Link to="/nutricion">
            <button className="p-2 w-full h-52 md:h-64 bg-green rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-4">
              <img
                className="w-30 md:w-40 md: mt-2"
                src={nutricion}
                alt="nutrición"
              />
              <p className="text-black text-xl md:text-2xl mb-5">Nutrición</p>
            </button>
          </Link>
          <Link to="/sueño">
            <button className="p-2 w-full h-52 md:h-64 bg-blue rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-2">
              <img
                className="w-24 md:w-28 mt-2 md:mt-5"
                src={sleep}
                alt="sueño"
              />
              <p className="text-black text-xl md:text-2xl md:mb-4">Sueño</p>
            </button>
          </Link>
          <Link to="/salud-mental">
            <button className="p-2 w-full h-52 md:h-64 bg-purple rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-5">
              <img
                className="w-32 md:w-32 mt-6 md:mt-5"
                src={mentalhealth}
                alt="salud mental"
              />
              <p className="text-black text-xl md:text-2xl -mt-2">Salud mental</p>
            </button>
          </Link>
          <Link to="/deporte">
            <button className="p-2 w-full h-52 md:h-64 bg-yellow rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-8">
              <img className="w-32 md:w-32 mt-3" src={deporte} alt="deporte" />
              <p className="text-black text-xl md:text-2xl -mt-6">Deporte</p>
            </button>
          </Link>
          <style type="text/css">
          {`
          body {
            background-color: ${backgroundColor};
          }
        `}
        </style>
        </div>
      </div>
    </>
  );
};

export default Home;
