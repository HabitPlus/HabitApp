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

function App() {
  return (
    <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nutricion" element={<Nutricion backgroundColor="#E3F9EA" />} />
            <Route path="/sueño" element={<Sueño />} />
            <Route path="/salud-mental" element={<SaludMental />} />
            <Route path="/deporte" element={<Deporte />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
