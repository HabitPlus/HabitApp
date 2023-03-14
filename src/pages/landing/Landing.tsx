import React from "react";
import { Link } from "react-router-dom";
import chica from "../../assets/girl-home1.svg";
import logo from "../../assets/logo-caritas.png";

const Landing = () => {
  return (
    <>
      <div className="flex justify-center mt-14">
        <img src={logo} alt="logo-caritas" />
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-20'>
        <img src={chica} alt="chica-corriendo" className="mt-20 md:w-1/3" />
        <Link to="/home">
          {" "}
          <button className="font-serif text-3xl text-white font-weight: 600 bg-orange hover:bg-red rounded-full py-1 pl-4 tracking-[0.5em] ">
            Habit+
          </button>
        </Link>
      </div>
    
    </>
  );
};

export default Landing;
