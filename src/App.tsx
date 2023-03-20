import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Deporte from "./pages/deporte/Deporte";
import Sueño from "./pages/sueño/Sueño";
import SaludMental from "./pages/salud-mental/SaludMental";
import Contact from "./pages/contacto/contact";
import Sports1 from "./pages/deporte/Subsections/sports1/Sports1";
import Sports2 from "./pages/deporte/Subsections/sports2/Sports2";
import Sports3 from "./pages/deporte/Subsections/sports3/Sports3";
import Sports4 from "./pages/deporte/Subsections/sports4/Sports4";
import ConsultarPro from "./pages/sueño/subsecciones/ConsultarPro";
import Dormir from "./pages/sueño/subsecciones/Dormir";
import Efectos from "./pages/sueño/subsecciones/Efectos";
import Estrategias from "./pages/sueño/subsecciones/Estrategias";
import Habitos from "./pages/sueño/subsecciones/Habitos";
import Insomnio from "./pages/sueño/subsecciones/Insomnio";
import Sm1 from "./pages/salud-mental/Subsections/Sm1";
import Sm2 from "./pages/salud-mental/Subsections/Sm2";
import Sm3 from "./pages/salud-mental/Subsections/Sm3";
import Sm4 from "./pages/salud-mental/Subsections/Sm4";
import CocinaSaludable from "./pages/nutrition/Subsections/cocina-saludable/CocinaSaludable";
import Nutrition from "./pages/nutrition/Nutrition";
import ConsejosAlimentos from "./pages/nutrition/Subsections/consejos-alimentos/ConsejosAlimentos";
import CompraEconomica from "./pages/nutrition/Subsections/compra-economica/CompraEconomica";
import RecetasSaludables from "./pages/nutrition/Subsections/recetas-saludables/RecetasSaludables";



function App() {
  return (
    <>
      <div className="container">
        
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />


            <Route path="/sueño" element={<Sueño backgroundColor="#CCEBFB" />} />
            <Route path="/dormir" element={<Dormir />} />
            <Route path="/consultarPro" element={<ConsultarPro />} />
            <Route path="/insomnio" element={<Insomnio />} />
            <Route path="/efectos" element={<Efectos />} />
            <Route path="/habitos" element={<Habitos />} />
            <Route path="/estrategias" element={<Estrategias />} />

            <Route path="/deporte" element={<Deporte backgroundColor="#F8EFD4" />} />
            <Route path="/nutricion" element={<Nutrition backgroundColor={"#E3F9EA"} />} />
            <Route path="/cocina-saludable" element={<CocinaSaludable />} />
            <Route path="/consejos-para-aprovechar-los-alimentos" element={<ConsejosAlimentos />} />
            <Route path="/la-compra-más-económica" element={<CompraEconomica />} />
            <Route path="/recetas-saludables" element={<RecetasSaludables />} />
            <Route path="/salud-mental" element={<SaludMental backgroundColor='DFBBFF'/>} />
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
      </div>
    </>
  );
}

export default App;

// import React from 'react'
// import "./App.css";
// import { BrowserRouter } from "react-router-dom";
// import Routes from './routes/Routes';


// const App = () => {
//   return (
//     <>
    
//     <div className="container">
//     <Routes />
//     </div>
   
//     </>
//   )
// }

// export default App