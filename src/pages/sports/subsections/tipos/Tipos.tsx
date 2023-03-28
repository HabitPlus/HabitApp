import React from "react";
import { BackButton } from "../../../../components/arrow/Arrow";
import Footer from "../../../../components/footer/Footer";
import Header from "../../../../components/header/Header";
import Nav from "../../../../components/nav/Nav";

const Tipos = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={"#FFC727"} />
      <Footer bgColor={"#FFC727"} />
      <div className="flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0 mb-40">
        <h1 className="text-black font-serif text-2xl md:text-3xl p-4 mb-6 py-4 md:p-6 text-[#FFC727] rounded-lg ">
          TIPOS DE ACTIVIDAD FÍSICA
        </h1>

        <div className="grid grid-rows-1 md:text-lg lg:mx-72 text-justify indent-2">
          <p>
            Existen diferentes formas de ejercitarnos físicamente, como las que
            se pueden observar a continuación:
          </p>
          <h2 className="text-black text-center md:text-lg mt-4 mb-4">
            ACTIVIDADES AERÓBICAS
          </h2>
          <p>
            El cuerpo se nutre del consumo de oxígeno para llevarlas a cabo,
            quemando hidratos y grasas.
          </p>
          <p>Son de baja, media o alta intensidad.</p>
          <p>Ejemplos: caminar, correr, bicicleta, bailar, nadar y patinar.</p>
          <h2 className="text-black text-center md:text-lg mt-4 mb-4">
            ACTIVIDADES ANAERÓBICAS
          </h2>
          <p>Son ejercicios de alta intensidad y poca duración.</p>
          <p>Se desarrollan músculos sin consumo de oxígeno.</p>
          <p>
            Ejemplos: abdominales, sentadillas, levantamiento de pesas, carreras
            cortas a gran velocidad, gimnasia artística o flexiones.
          </p>
          <h2 className="text-black text-justify md:text-lg mt-4">
            La Fundación Española del Corazón y la Sociedad Española de
            Cardiología (2019), recomiendan lo siguiente:
          </h2>
          <br />
          <ol className="list-decimal">
            <li>
              Para los menores de cinco años: realizar actividades físicas de
              juego varias veces y repartidos a lo largo del día. No mantenerlos
              retenidos y sin moverse más de una hora seguido, excepto en los
              momentos de dormir.{" "}
            </li>
            <li>
              A partir de los 5 años hasta los 17 años: dedicar una hora al día
              a actividad física moderada o intensa e incorporar actividades
              aeróbicas al menos tres días a la semana.
            </li>
            <li>
              De los 18 a los 64 años: actividades físicas aeróbicas durante 150
              a 300 minutos al día y algunas de fortalecimiento muscular.
            </li>
            <li>
              Más de 65 años: actividades físicas variadas tres o más días a la
              semana.{" "}
            </li>
          </ol>{" "}
          <br />
          <p>
            A cualquier edad, deberíamos reducir el tiempo dedicado a
            actividades sedentarias pues está comprobado que nos perjudica a la
            salud.
          </p>
          <br />
          <p>
            <a
              href="https://www.sanidad.gob.es/campannas/campanas21/HablemosDeSaludMental.htm "
              target={"_blank"}
              rel="noreferrer"
              className="underline italic"
            >
              Click aqui para ver la fuente{" "}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Tipos;
