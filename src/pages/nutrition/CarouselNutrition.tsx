import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import cocina from '../../assets/nutrition/cocina-saludable.svg';
import consejos from '../../assets/nutrition/consejos-alimentos.svg';
import compra from '../../assets/nutrition/compra-economica.svg';
import recetas from '../../assets/nutrition/recetas-saludables.svg';

const CarouselNutrition = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: false,
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
      <Link to='/cocina-saludable'>
        <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center 
        justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={cocina} alt="cocina saludable" />
          <p className="text-black text-xl text-center md:text-2xl md:mb-4">Cocina saludable</p>
        </div>
      </Link>
    </div>

    <div>
      <Link to='/consejos-para-aprovechar-los-alimentos'>
        <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={consejos} alt="consejos para aprovechar alimentos" />
          <p className="text-black text-xl text-center md:text-2xl md:mb-4">Consejos para <br /> aprovechar los alimentos</p>
        </div>
      </Link>
    </div>

    <div>
      <Link to='/la-compra-más-económica'>
        <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={compra} alt="la compra más económica" />
          <p className="text-black text-xl text-center md:text-2xl md:mb-4">La compra más <br /> económica</p>
        </div>
      </Link>
    </div>

    <div>
      <Link to='/recetas-saludables'>
        <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
          <img className='w-52 md:w-32 mt-2 md:mt-5' src={recetas} alt="recetas saludables" />
          <p className="text-black text-xl text-center md:text-2xl md:mb-4">Recetas saludables</p>
        </div>
      </Link>
    </div>
  </Slider>
</div>
</>
    );
  };
        
  

export default CarouselNutrition;