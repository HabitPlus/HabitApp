import React from 'react'
import Carrousel from '../nutrition/CarouselNutrition'
import Header from '../../components/header/Header'
import { BackButton } from '../../components/arrow/Arrow'
import Nav from '../../components/nav/Nav'
import appService from '../../services/newContentService'
import BuenCarrusel from './buenCarrusel'


interface DeporteProps {
  backgroundColor: string;
}

const NutritionRender: React.FC<DeporteProps> = ({ backgroundColor }) => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav bgColor={'#53B965'} />
      <>
        <div className="">
          <h1 className='text-center mt-[8%] md:mt-[2%] text-3xl font-serif text-[#53B965]'>Nutrición</h1>
        </div>
        <BuenCarrusel />
        <style type="text/css">
          {`
          body {
            background-color: ${backgroundColor};
          }
        `}
        </style>
      </>
    </>
  );
};

export default NutritionRender;

/* import React, { useEffect, useState } from "react";
import logo from "../../assets/tomate-logo.svg";
import cachapa from "../../assets/cachapa.svg";
import PrimaryNavbar from "../../components/PrimaryNavbar";
import appServices from "../../apiServices/appservices" */;




