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
import Sm1 from "./pages/salud-mental/Subsections/Sm1";
import Sm2 from "./pages/salud-mental/Subsections/Sm2";
import Sm3 from "./pages/salud-mental/Subsections/Sm3";
import Sm4 from "./pages/salud-mental/Subsections/Sm4";

function App() {
  return (
    <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nutricion" element={<Nutricion />} />
            <Route path="/sueño" element={<Sueño />} />
            <Route path="/salud-mental" element={<SaludMental />} />
            <Route path="/deporte" element={<Deporte backgroundColor="#FFEBB0" />} />
            <Route path="/contact" element={<Contact backgroundColor="#FFFCF3" />} />
            <Route path="/sports1" element={<Sports1 />} />
            <Route path="/sports2" element={<Sports2 />} />
            <Route path="/sports3" element={<Sports3 />} />
            <Route path="/sports4" element={<Sports4 />} />
            <Route path="/sm1" element={<Sm1 />} />
            <Route path="/sm2" element={<Sm2 />} />
            <Route path="/sm3" element={<Sm3 />} />
            <Route path="/sm4" element={<Sm4 />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
