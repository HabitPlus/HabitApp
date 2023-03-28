import React from "react";
import { BackButton } from "../../../../components/arrow/Arrow";
import Footer from "../../../../components/footer/Footer";
import Header from "../../../../components/header/Header";
import Nav from "../../../../components/nav/Nav";

const Empezar = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={"#FFC727"} />
      <Footer bgColor={"#FFC727"} />
      <div className="flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0 mb-20">
        <h1 className="text-black font-serif text-2xl md:text-3xl mb-6 py-4 md:p-6 text-[#FFC727] rounded-lg ">
          CONSEJOS PARA REALIZAR ACTIVIDAD FÍSICA
        </h1>

        <div className="md:text-lg px-8 lg:mx-72 text-justify text-black  mt-4">
          <p className="text-black text-justify md:text-lg indent-2">
            Empezar a hacer ejercicio requiere que tengamos en consideración una serie de consejos, como:
          </p> <br />
          <ul className="list-disc ">
            <li>
              Antes de cualquier práctica deportiva, calentar el cuerpo.
            </li>
            <li>
              {" "}
              Ajustar la intensidad y el tipo de ejercicio a nuestras
              posibilidades, empezando por ejercicios sencillos y pocas
              repeticiones e ir aumentando.
            </li>
            <li >
              {" "}
              Mantenerse bien hidratado/a durante la actividad física.
            </li>
            <li>
              {" "}
              Después de hacer ejercicio, ducharse y lavar la ropa.
            </li>
          </ul><br />
          <p className="indent-2">
            Puedes ver el siguiente video con recomendaciones de la OMS sobre actividades físicas:
          </p>
          <a
            className="underline text-center mt-4"
            href="https://www.youtube.com/watch?v=DcZO3YzbWuA"
            target="_blank"
            rel="noreferrer"
          >
            Click Aquí
          </a>
        </div>
      </div>
    </>
  );
};
export default Empezar;
