import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import sleep from '../../assets/sleep.svg'

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
    <div className='bg-blue'>
      <Slider {...settings}>
        <div>
          <Link to='/nutricion'>
            <div className="button-container">
              
            </div>
          </Link>
        </div>
        <div>
          <Link to='/salud-mental'>
            <div className="button-container">
              <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>¿Cuándo debo Consultar un Especialista?</button>
            </div>
          </Link>
        </div>
        <div>
          <Link to='/deporte'>
            <div className="button-container">
              <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>¿Qué es el Insomnio?</button>
            </div>
          </Link>
        </div>
        <div>
          <Link to='/sueño'>
            <div className="button-container">
              <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>¿Cómo Puedo Dormir Mejor?</button>
            </div>
          </Link>
        </div>
        <div>
          <Link to='/sueño'>
            <div className="button-container">
              <button className='bg-white text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>
                <img src={sleep} alt="sleep" />
                ¿Qué Causas Producen el Insomnio?
              </button>
            </div>
          </Link>
        </div>
        <div>
          <Link to='/sueño'>
            <div className="button-container">
              <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>¿Cómo Puedo Dormir Mejor?</button>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;