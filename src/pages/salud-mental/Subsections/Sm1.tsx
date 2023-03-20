import React from "react";
import Footer from "../../../components/Footer";
import { BackButton } from "../../../components/Arrow";
import Header from "../../../components/Header";
import Nav from "../../../components/Nav";

const Sm1 = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav />

      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl text-black text-center h-fit w-fit p-2 rounded-lg md:text-3xl md:p-4 bg-purple text-white">
          ¿Qué es la salud mental?
        </h1>
      </div>

      <div className="justify-center p-8 text-justify text-base lg:mx-72 indent-6 mb-20">
        <p >
          Tener buena salud mental según la OMS sería tener conciencia de
          nuestras capacidades como para afrontar la vida como vaya viniendo,
          así como realizar actividades productivas y contribuciones a la
          comunidad. Tener buena salud mental supone que seamos capaces de
          analizar la necesidades que tenemos y las situaciones que vivimos y
          contar con recursos básicos. 
        </p>
          <p> Deberíamos poder sentirnos seguros y
          reconocidos por las personas de nuestro entorno para generar una
          visión positiva de nosotros/as mismos/as y por último, hacer planes
          realistas para el futuro y poder solucionar los problemas que vayan
          apareciendo.</p>
      </div>

    </>
  );
};

export default Sm1;