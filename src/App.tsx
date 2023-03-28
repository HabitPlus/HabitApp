import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Sport from "./pages/sports/Sport";
import Sleep from "./pages/sleep/Sleep";
import MentalHealth from "./pages/mentalhealth/MentalHealth";
import Contact from "./pages/contact/Contact";
import Importancia from "./pages/sports/subsections/importancia/Importancia";
import Tipos from "./pages/sports/subsections/tipos/Tipos";
import Empezar from "./pages/sports/subsections/empezar/Empezar";
import Actividad from "./pages/sports/subsections/actividad/Actividad";
import ConsultarPro from "./pages/sleep/subsections/consultar/ConsultarPro";
import Dormir from "./pages/sleep/subsections/dormir/Dormir";
import Efectos from "./pages/sleep/subsections/efectos/Efectos";
import Estrategias from "./pages/sleep/subsections/estrategias/Estrategias";
import Habitos from "./pages/sleep/subsections/habitos/Habitos";
import Insomnio from "./pages/sleep/subsections/insomnio/Insomnio";
import QueEs from "./pages/mentalhealth/subsections/quees/QueEs";
import Señales from "./pages/mentalhealth/subsections/señales/Señales";
import Promover from "./pages/mentalhealth/subsections/promover/Promover";
import Consultar from "./pages/mentalhealth/subsections/consultar/Consultar";
import CocinaSaludable from "./pages/nutrition/Subsections/cocina-saludable/CocinaSaludable";
import Nutrition from "./pages/nutrition/Nutrition";
import ConsejosAlimentos from "./pages/nutrition/Subsections/consejos-alimentos/ConsejosAlimentos";
import CompraEconomica from "./pages/nutrition/Subsections/compra-economica/CompraEconomica";
import RecetasSaludables from "./pages/nutrition/Subsections/recetas-saludables/RecetasSaludables";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";

function App() {
  return (
    <> 
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing backgroundColor="#FFFCF3" />} />
            <Route path="/home" element={<Home backgroundColor="#FFFCF3" />} />
            <Route path="/inicio-sesion" element={<LoginPage />} />
            <Route path="/registro" element={<RegisterPage />} />

            <Route path="/sueño" element={<Sleep backgroundColor="#CCEBFB" />} />
            <Route path="/dormir" element={<Dormir />} />
            <Route path="/consultarPro" element={<ConsultarPro />} />
            <Route path="/insomnio" element={<Insomnio />} />
            <Route path="/efectos" element={<Efectos />} />
            <Route path="/habitos" element={<Habitos />} />
            <Route path="/estrategias" element={<Estrategias />} />

            <Route path="/deporte" element={<Sport backgroundColor="#F8EFD4" />} />
            <Route path="/importancia" element={<Importancia />} />
            <Route path="/tipos" element={<Tipos />} />
            <Route path="/consejos" element={<Empezar />} />
            <Route path="/actividad" element={<Actividad />} />

            <Route path="/nutricion" element={<Nutrition backgroundColor={"#E3F9EA"} />} />
            <Route path="/cocina-saludable" element={<CocinaSaludable />} />
            <Route path="/consejos-para-aprovechar-los-alimentos" element={<ConsejosAlimentos />} />
            <Route path="/la-compra-más-económica" element={<CompraEconomica />} />
            <Route path="/recetas-saludables" element={<RecetasSaludables />} />

            <Route path="/salud-mental" element={<MentalHealth backgroundColor='#DFBBFF'/>} />
            <Route path="/que-es" element={<QueEs />} />
            <Route path="/señales" element={<Señales />} />
            <Route path="/promover" element={<Promover />} />
            <Route path="/consultar" element={<Consultar />} />

            <Route path="/contentform" element={<ContentForm />} />

            <Route path="/contact" element={<Contact backgroundColor="#FFFCF3" />} />
            </Route>
        </Routes>
    </>
  );
}

export default App;
