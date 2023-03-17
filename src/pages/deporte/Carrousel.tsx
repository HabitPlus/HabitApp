import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import sleep from '../../assets/sleep.svg'
import Header from '../../components/Header';
import { BackButton } from '../../components/Arrow';
import Nav from '../../components/Nav';
import importancia from '../../assets/sports/import-actfca.svg';
import tipos from '../../assets/sports/tipos-actfca.svg';
import consejos from '../../assets/sports/consejos-actfca.svg';
import entorno from '../../assets/sports/entorno-actfca.svg';


const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className=" bg-orange mt-14 md:mt-52 gap-6 mx-4 md:gap-10 md:mx-96 md:w-1/3">
  <Slider {...settings}>
    <div>
      <Link to='/sports1'>
        <div className="flex flex-col p-2 w-full md:w-fit md:p-10 bg-white rounded-2xl shadow-2xl gap-2">
          <img className='w-52 md:w-72 mt-2 md:mt-5' src={importancia} alt="importancia" />
          <p className="text-black text-xl text-center md:text-6xl md:mb-4">LA IMPORTANCIA DE LA <br /> ACTIVIDAD FÍSICA</p>
        </div>
      </Link>
    </div>
    <div>
      <Link to='/sports2'>
        <div className="p-2 w-full md:w-fit md:p-10 bg-white rounded-2xl shadow-2xl flex 
        flex-col gap-2">
          <img className='w-52 md:w-72 mt-2 md:mt-5' src={tipos} alt="tipos" />
          <p className="text-black text-xl text-center md:text-6xl md:mb-4">TIPOS DE ACTIVIDADES <br /> FÍSICAS</p>
        </div>
      </Link>
    </div>
    <div>
      <Link to='/sports3'>
        <div className="p-2 w-full md:w-fit md:p-10 bg-white rounded-2xl shadow-2xl flex 
        flex-col gap-2">
          <img className='w-52 md:w-72 mt-2 md:mt-5' src={consejos} alt="consejos" />
          <p className="text-black text-xl text-center md:text-6xl md:mb-4">CONSEJOS PARA REALIZAR <br /> ACTIVIDAD FÍSICA</p>
        </div>
      </Link>
    </div>
    <div>
      <Link to='/sports4'>
        <div className="p-2 w-full md:w-fit md:p-10 bg-white rounded-2xl shadow-2xl flex 
        flex-col gap-2">
          <img className='w-52 md:w-72 mt-2 md:mt-5' src={entorno} alt="entorno" />
          <p className="text-black text-xl text-center md:text-6xl md:mb-4">ACTIVIDAD FÍSICA EN <br /> EL ENTORNO</p>
        </div>
      </Link>
    </div>
  </Slider>
</div>
</>
    );
  };
        
  

export default Carrousel;