import React from "react";
import { BackButton } from "../../../../components/arrow/Arrow";
import Header from "../../../../components/header/Header";
import Nav from "../../../../components/nav/Nav";
import Footer from '../../../../components/footer/Footer';

const Consultar = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#9F3BF8'} />
      <Footer bgColor={'#9F3BF8'} />
      
      <div className="p-4 mb-20">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-2xl text-center h-fit w-fit p-2 rounded-lg md:text-3xl font-serif text-[#9F3BF8]  ">
            ¿Cuándo consultar a un profesional?
          </h1>
        </div>
        <div className="justify-center p-8 text-justify text-lg lg:mx-72 indent-2">
          <p>
            El Ministerio de Sanidad señala que si sientes que no tienes
            fuerzas, todo te supera, te sientes vacío, estás pero no estás o te
            ves que no puedes con la vida, debes consultar con un especialista
            en salud mental.{" "}
          </p>
          <p>
            Puedes acudir al médico de cabecera que atenderá los síntomas que
            tengas y si hiciera falta te enviará al psiquiatra (para optimizar
            la medicación), o al psicólogo (para hacer terapia).{" "}
          </p>
          <br />
          <p className="italic">
            Fuente: Ministerio de Sanidad
            <a
              href="https://www.sanidad.gob.es/campannas/campanas21/HablemosDeSaludMental.htm "
              target={"_blank"}
              rel="noreferrer" className="underline"> Click Aqui </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Consultar;
