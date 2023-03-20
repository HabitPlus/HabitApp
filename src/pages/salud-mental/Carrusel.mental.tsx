import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { BackButton } from '../../components/Arrow';
import Nav from '../../components/Nav';
import Salud1 from '../../assets/salud-mental-1.svg'
import Salud2 from '../../assets/salud-mental-2.svg';
import Salud3 from '../../assets/salud-mental-3.svg';
import Salud4 from '../../assets/salud-mental-4.svg';
import entorno from '../../assets/entorno-actfca.svg';


const CarrouselMental = () => {
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
      <Link to='/sm1'>
        <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center 
        justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={Salud2} alt="tipos" />
          <p className="text-black text-xl text-center md:text-3xl md:mb-4">¿Que es la salud mental?</p>
        </div>
      </Link>
    </div>

    <div>
      <Link to='/sm2'>
        <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center 
        justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={Salud3} alt="consejos" />
          <p className="text-black text-xl text-center md:text-3xl md:mb-4">Señales de problemas de salud mental</p>
        </div>
      </Link>
    </div>

    <div>
      <Link to='/sm3'>
        <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={Salud4} alt="entorno" />
          <p className="text-black text-xl text-center md:text-3xl md:mb-4">¿Cómo promover una buena salud mental?</p>
        </div>
      </Link>
    </div>

    <div>
      <Link to='/sm4'>
        <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center 
        justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={Salud1} alt="imagensalud" />
          <p className="text-black text-xl text-center md:text-3xl md:mb-4">¿Cuándo consultar a un profesional?</p>
        </div>
      </Link>
    </div>
  </Slider>
</div>
</>
    );
  };
        
  

export default CarrouselMental;