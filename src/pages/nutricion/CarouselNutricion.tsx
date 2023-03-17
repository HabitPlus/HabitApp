import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import cocina from '../../assets/nutricion/cocina-saludable.svg';
import consejos from '../../assets/nutricion/consejos-alimentos.svg';
import compra from '../../assets/nutricion/compra-economica.svg';
import recetas from '../../assets/nutricion/recetas-saludables.svg';


const CarouselNutricion = () => {
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
      <Link to='/cocina-saludable'>
        <div className="p-2 w-full h-96 md:h-72 bg-green-light rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center 
        justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={cocina} alt="importancia" />
          <p className="text-black text-xl text-center md:text-3xl md:mb-4">Cocina saludable</p>
        </div>
      </Link>
    </div>
    <div>
      <Link to='/consejos-para-aprovechar-los-alimentos'>
        <div className="p-2 w-full h-96 md:h-72 bg-green-light rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center 
        justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={consejos} alt="tipos" />
          <p className="text-black text-xl text-center md:text-3xl md:mb-4">Consejos para <br /> aprovechar los alimentos</p>
        </div>
      </Link>
    </div>
    <div>
      <Link to='/la-compra-más-económica'>
        <div className="p-2 w-full h-96 md:h-72 bg-green-light rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center 
        justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={compra} alt="consejos" />
          <p className="text-black text-xl text-center md:text-3xl md:mb-4">La compra más <br /> económica</p>
        </div>
      </Link>
    </div>
    <div>
      <Link to='/recetas-saludables'>
        <div className="p-2 w-full h-96 md:h-72 bg-green-light rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={recetas} alt="entorno" />
          <p className="text-black text-xl text-center md:text-3xl md:mb-4">Recetas saludables</p>
        </div>
      </Link>
    </div>
  </Slider>
</div>
</>
    );
  };
        
  

export default CarouselNutricion;