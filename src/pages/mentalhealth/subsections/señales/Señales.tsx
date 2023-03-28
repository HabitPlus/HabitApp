import React from "react";
import { BackButton } from "../../../../components/arrow/Arrow";
import Header from "../../../../components/header/Header";
import Nav from "../../../../components/nav/Nav";
import Footer from '../../../../components/footer/Footer';

const Señales = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#9F3BF8'} />
      <Footer bgColor={'#9F3BF8'} />
      
      <div className="p-4 mb-20">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-2xl text-center h-fit w-fit p-2 rounded-lg md:text-3xl font-serif text-[#9F3BF8] ">
            Señales de problemas de salud mental
          </h1>
        </div>
        <div className="justify-center p-8 text-justify text-lg lg:mx-72">
          <p className="indent-2">
            Hay una serie de señales que nos indican que debemos hacer algo para
            ponernos mejor. Éstas señales son diferentes de una persona a otra y
            no nos van a afectar todas. Marca a continuación las que estés
            experimentando:
          </p>
          <br />
          <ul className="list-disc">
            <li>
              Cambios en los hábitos alimentarios (comer más o dejar de comer y
              perder peso)
            </li>
            <li>No tener ganas de relacionarse con amistades y familiares</li>
            <li> Sentirse con poca o ninguna energía</li>
            <li>Tener un sentimiento de vacío o de cómo si nada importara</li>
            <li>
              {" "}
              Experimentar dolores o molestias que no tienen una explicación
              médica
            </li>
            <li>
              Sentirse sin esperanza, con un exceso de enfado, mucho miedo,
              culpa, vergüenza o demasiados nervios
            </li>
            <li>
              Beber, fumar o incluso tomar drogas para no sentir tanto dolor por
              la situación
            </li>
            <li>
              Problemas para atender o memorizar cosas (olvidos constantes)
            </li>
            <li>
              Escuchar voces o ver u oír cosas que después te das cuenta que no
              están
            </li>
            <li>Experimentar cambios de humor a menudo</li>
            <li>
              Tener pensamientos que nos quitan el sueño y no nos podemos quitar
              de la cabeza
            </li>
            <li>Pensar en hacerse daño a uno/a mismo/a o a otras personas</li>
            <li>Verse incapaz para realzar las actividades del día a día</li>
          </ul>
          <br />
          <p className="italic">
            Fuente: Psicología y Mente en
            <a href="https://psicologiaymente.com/clinica/senales-baja-salud-mental" target={"_blank"} rel="noreferrer" className="underline"> Dar Click Aqui</a>
          </p>
          <br />
          <p className="font-bold indent-2">
            Tener uno o varios de estos signos no son indicadores de un problema
            per se, pero nos están señalando que algo ocurre en nuestro interior
            que debemos atender.
          </p>
        </div>
      </div>
    </>
  );
};

export default Señales;
