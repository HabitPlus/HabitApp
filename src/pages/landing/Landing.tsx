import React from "react";
import { Link } from "react-router-dom";
import chica from "../../assets/girl-home1.svg";
import logo from "../../assets/logo-caritas.png";

const Landing = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <img src={logo} alt="logo-caritas" /> <br />
      </div>

      <div className="md:flex md:items-center md:justify-center mx-10 gap-14">
        <img src={chica} alt="chica-corriendo" className="my-20 md:w-1/3" />
        <br />
        <Link
          to="/home"
          className="font-serif text-3xl text-white font-weight: 600 bg-orange rounded-full py-1 pl-4 tracking-[0.5em] "
        >Habit+</Link>
      </div>
    </>
  );
};

export default Landing;
