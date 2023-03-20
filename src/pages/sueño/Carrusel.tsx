import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import sleep from '../../assets/sleep.svg'
import dormirbien from '../../assets//sleep/dormirbien.svg'
import efectos from '../../assets//sleep/efectos.svg'
import habitos from '../../assets//sleep/habitos.svg'
import insomnio from '../../assets//sleep/insomnio.svg'
import profesional from '../../assets//sleep/profesional.svg'
import estrategias from '../../assets//sleep/estrategias.svg'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mx-4">
        <Slider {...settings}>
          <div>
            <Link to='/dormir'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-48 md:w-32 mt-2 md:mt-5' src={dormirbien} alt="Dormir Bien" />
                <p className="text-black text-xl md:text-3xl md:mb-4">El Dormir Bien</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/insomnio'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-48 md:w-32 mt-2 md:mt-5' src={insomnio} alt="¿Qué es el Insomnio?" />
                <p className="text-black text-xl md:text-3xl md:mb-4">¿Qué es el Insomnio?</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/efectos'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-48 md:w-32 mt-2 md:mt-5' src={efectos} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Causas y efectos del Insomnio</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/habitos'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-48 md:w-32 mt-2 md:mt-5' src={habitos} alt="¿Cómo Puedo Dormir Mejor?" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Hábitos para Dormir Bien</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/estrategias'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-48 md:w-32 mt-2 md:mt-5' src={estrategias} alt="¿Qué Causas Producen el Insomnio?" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Estrategias para Favorecer el Sueño</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/consultarPro'>
            <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-48 md:w-32 mt-2 md:mt-5' src={profesional} alt="¿Qué Causas Producen el Insomnio?" />
                <p className="text-black text-xl md:text-3xl md:mb-4">¿Cuándo Consultar a un Profesional?</p>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;