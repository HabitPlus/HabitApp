import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/header/Header";
import { BackButton } from "../../components/arrow/Arrow";
import Nav from "../../components/nav/Nav";
import Carrusel from "./Carrusel";

interface SueñoProps {
  backgroundColor: string;
}
const Sueño: React.FC<SueñoProps> = ({ backgroundColor }) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={"#5A88FC"} />
      <>
        <h1 className="text-[#5A88FC] text-center text-3xl font-serif mt-[8%] md:mt-[2%]">
          Sueño
        </h1>
        <Carrusel />
        <style type="text/css">
          {`
          body {
            background-color: ${backgroundColor};
          }
        `}
        </style>
      </>
    </>
  );
};

export default Sueño;
