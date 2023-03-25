import React from "react";
import { BackButton } from "../../../../components/arrow/Arrow";
import Header from "../../../../components/header/Header";
import Nav from "../../../../components/nav/Nav";
import Footer from '../../../../components/footer/Footer'

const Consultar = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={"#5A88FC"} />
      <Footer bgColor={'#5A88FC'} />
      
      <div className="flex flex-col items-center justify-center text-center mt-8 mr-8 ml-8 px-8 md:px-72 mb-20">
        <h1 className="text-[#5A88FC] font-serif text-lg md:text-3xl mb-6 py-4 md:p-6 rounded-lg ">
          Cuándo debo Consultar a un Profesional
        </h1>
        <p className="text-black text-justify text-lg md:text-xl leading-8">
          Hay que consultar a un especialista cuando hayan pasado días sin
          dormir las horas necesarias (menos de 6 horas) durante 2 o 3 semanas.
          Existen tratamientos médicos para el insomnio, como los hipnóticos o
          los ansiolíticos, si este se debe a un elevado nivel de ansiedad.
          Consulta con tu médico para poder recibir un tratamiento adecuado.
        </p>
      </div>
    </>
  );
};

export default Consultar;
