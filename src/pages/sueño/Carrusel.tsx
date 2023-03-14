import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


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
    autoplaySpeed: 2000,
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
    <div className=''>
    <Slider {...settings}>
      <div>
        <Link to='/nutricion'>
          <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>Dormir Bien</button>
        </Link>
      </div>
      <div>
        <Link to='/salud-mental'>
          <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>¿Cuándo debo Consultar un Especialista?</button>
        </Link>
      </div>
      <div>
        <Link to='/deporte'>
          <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>¿Qué es el Insomnio?</button>
        </Link>
      </div>
      <div>
        <Link to='/sueño'>
          <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>¿Cómo Puedo Dormir Mejor?</button>
        </Link>
      </div>
      <div>
        <Link to='/sueño'>
          <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>¿Qué Causas Producen el Insomnio?</button>
        </Link>
      </div>
      <div>
        <Link to='/sueño'>
          <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-40 w-64 rounded-full'>¿Qué Efectos tiene el Insomnio?</button>
        </Link>
      </div>
    </Slider>
    </div>
  );
};

export default Carousel;