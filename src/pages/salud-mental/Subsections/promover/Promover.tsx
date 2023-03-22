import React from "react";
import { BackButton } from "../../../../components/Arrow";
import Header from "../../../../components/Header";
import Nav from "../../../../components/Nav";

const Promover = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#9F3BF8'} />

      <div className="p-4 mb-20">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-2xl text-center h-fit w-fit p-2 rounded-lg md:text-3xl font-serif text-[#9F3BF8] ">
            ¿Cómo promover una buena salud mental?
          </h1>
        </div>
        <div className="justify-center p-8 text-justify text-base lg:mx-72 indent-6">
          <p>
            El Foresight Programme (2008) señala una serie de medidas que podemos empezar a implementar ya en nuestras vidas:
          </p>
          <br />
          <ul className="list-disc indent-1 lg:indent-4 underline italic visited:text-grey">
            <a href="https://forbes.es/lifestyle/11175/10-maneras-de-conectar-con-cualquier-persona-que-conozcas/" target={"_blank"} rel="noreferrer"> <li>
              Conectar y relacionarse con las personas
            </li></a>
            <br />
            <a href="https://trabajarporelmundo.org/47-cosas-que-puedes-hacer-cuando-estas-en-casa/" target={"_blank"} rel="noreferrer"> <li>
              Probar cosas nuevas
            </li></a>
            <br />
            <a href="http://www.envejecimientoactivo.es/pdf/LISTADO_POTENCIALES_ACTIVIDADES_AGRADABLES-1.pdf" target={"_blank"} rel="noreferrer"> <li>
              Mantenerse activo/a
            </li></a>
            <br />
            <a href="https://www.caritassantfeliu.cat/que-fem/voluntariat/" target={"_blank"} rel="noreferrer"> <li>
              Contribuir a nuestra sociedad
            </li></a>
            <br />
            <a href="https://www.youtube.com/c/YolandaCalvoG%C3%B3mez" target={"_blank"} rel="noreferrer"> <li>
              Atención plena
            </li></a>
          </ul>
          <br />
        </div>
      </div>
    </>
  );
};

export default Promover;