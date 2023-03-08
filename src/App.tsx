import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
