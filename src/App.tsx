import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Nutricion from "./pages/nutricion/Nutricion";
import Deporte from "./pages/deporte/Deporte";
import Sueño from "./pages/sueño/Sueño";
import SaludMental from "./pages/salud-mental/SaludMental";
import Contact from "./pages/contacto/contact";
import Sports1 from "./pages/deporte/Subsections/sports1/Sports1";
import Sports2 from "./pages/deporte/Subsections/sports2/Sports2";
import Sports3 from "./pages/deporte/Subsections/sports3/Sports3";
import Sports4 from "./pages/deporte/Subsections/sports4/Sports4";
import CocinaSaludable from "./pages/nutricion/Subsections/cocina-saludables/CocinaSaludable";
import ConsejosAlimentos from "./pages/nutricion/Subsections/consejos-alimentos/ConsejosAlimentos";
import CompraEconomica from "./pages/nutricion/Subsections/compra-economica/CompraEconomica";
import RecetasSaludables from "./pages/nutricion/Subsections/recetas-saludables/RecetasSaludables";



function App() {
  return (
    <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nutricion" element={<Nutricion backgroundColor={"#E3F9EA"} />} />
            <Route path="/cocina-saludable" element={<CocinaSaludable />} />
            <Route path="/consejos-para-aprovechar-los-alimentos" element={<ConsejosAlimentos />} />
            <Route path="/la-compra-más-económica" element={<CompraEconomica />} />
            <Route path="/recetas-saludables" element={<RecetasSaludables />} />
            <Route path="/sueño" element={<Sueño />} />
            <Route path="/salud-mental" element={<SaludMental />} />
            <Route path="/deporte" element={<Deporte backgroundColor="#F8EFD4" />} />
            <Route path="/contact" element={<Contact backgroundColor="#FFFCF3" />} />
            <Route path="/sports1" element={<Sports1 />} />
            <Route path="/sports2" element={<Sports2 />} />
            <Route path="/sports3" element={<Sports3 />} />
            <Route path="/sports4" element={<Sports4 />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
