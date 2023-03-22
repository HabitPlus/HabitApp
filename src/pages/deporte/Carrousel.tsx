import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import importancia from '../../assets/sports/import-actfca.svg';
import tipos from '../../assets/sports/tipos-actfca.svg';
import consejos from '../../assets/sports/consejos-actfca.svg';
import entorno from '../../assets/sports/entorno-actfca.svg';

const Carrousel = () => {
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
      <div className="mt-14 grid grid-cols-1 gap-6 mx-16">
        <Slider {...settings}>
          <div>
            <Link to='/importancia'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-2">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={importancia} alt="Importancia de la actividad física" />
                <p className="text-black text-xl text-center md:text-3xl md:mb-4">Importancia de la actividad física</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/tipos'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-2">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={tipos} alt="Tipos de actividad física" />
                <p className="text-black text-xl text-center md:text-3xl md:mb-4">Tipos de actividad física</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/empezar'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-2">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={consejos} alt="consejos para realizar actividad física" />
                <p className="text-black text-xl text-center md:text-3xl md:mb-4">Consejos para realizar actividad física</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/actividad'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-2">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={entorno} alt="actividad física en el entorno" />
                <p className="text-black text-xl text-center md:text-3xl md:mb-4">Actividad física en el entorno</p>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carrousel;