import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Deporte from "./pages/deporte/Deporte";
import Sueño from "./pages/sueño/Sueño";
import SaludMental from "./pages/salud-mental/SaludMental";
import Contact from "./pages/contacto/Contacto";
import Importancia from "./pages/deporte/Subsections/importancia/Importancia";
import Tipos from "./pages/deporte/Subsections/tipos/Tipos";
import Empezar from "./pages/deporte/Subsections/empezar/Empezar";
import Actividad from "./pages/deporte/Subsections/actividad/Actividad";
import ConsultarPro from "./pages/sueño/subsecciones/consultar/ConsultarPro";
import Dormir from "./pages/sueño/subsecciones/dormir/Dormir";
import Efectos from "./pages/sueño/subsecciones/efectos/Efectos";
import Estrategias from "./pages/sueño/subsecciones/estrategias/Estrategias";
import Habitos from "./pages/sueño/subsecciones/habitos/Habitos";
import Insomnio from "./pages/sueño/subsecciones/insomnio/Insomnio";
import QueEs from "./pages/salud-mental/Subsections/quees/QueEs";
import Señales from "./pages/salud-mental/Subsections/señales/Señales";
import Promover from "./pages/salud-mental/Subsections/promover/Promover";
import Consultar from "./pages/salud-mental/Subsections/consultar/Consultar";
import CocinaSaludable from "./pages/nutrition/Subsections/cocina-saludable/CocinaSaludable";
import Nutrition from "./pages/nutrition/Nutrition";
import ConsejosAlimentos from "./pages/nutrition/Subsections/consejos-alimentos/ConsejosAlimentos";
import CompraEconomica from "./pages/nutrition/Subsections/compra-economica/CompraEconomica";
import RecetasSaludables from "./pages/nutrition/Subsections/recetas-saludables/RecetasSaludables";

function App() {
  return (
    <> 
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing backgroundColor="#FFFCF3" />} />
            <Route path="/home" element={<Home backgroundColor="#FFFCF3" />} />

            <Route path="/sueño" element={<Sueño backgroundColor="#CCEBFB" />} />
            <Route path="/dormir" element={<Dormir />} />
            <Route path="/consultarPro" element={<ConsultarPro />} />
            <Route path="/insomnio" element={<Insomnio />} />
            <Route path="/efectos" element={<Efectos />} />
            <Route path="/habitos" element={<Habitos />} />
            <Route path="/estrategias" element={<Estrategias />} />

            <Route path="/deporte" element={<Deporte backgroundColor="#F8EFD4" />} />
            <Route path="/importancia" element={<Importancia />} />
            <Route path="/tipos" element={<Tipos />} />
            <Route path="/consejos" element={<Empezar />} />
            <Route path="/actividad" element={<Actividad />} />

            <Route path="/nutricion" element={<Nutrition backgroundColor={"#E3F9EA"} />} />
            <Route path="/cocina-saludable" element={<CocinaSaludable />} />
            <Route path="/consejos-para-aprovechar-los-alimentos" element={<ConsejosAlimentos />} />
            <Route path="/la-compra-más-económica" element={<CompraEconomica />} />
            <Route path="/recetas-saludables" element={<RecetasSaludables />} />

            <Route path="/salud-mental" element={<SaludMental backgroundColor='#DFBBFF'/>} />
            <Route path="/que-es" element={<QueEs />} />
            <Route path="/señales" element={<Señales />} />
            <Route path="/promover" element={<Promover />} />
            <Route path="/consultar" element={<Consultar />} />

            <Route path="/contact" element={<Contact backgroundColor="#FFFCF3" />} />
            </Route>
        </Routes>
    </>
  );
}

export default App;
