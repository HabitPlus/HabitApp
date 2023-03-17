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
    autoplaySpeed: 10000,
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
      <div className="mt-14 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mx-4 md:mx-10">
        <Slider {...settings}>
          <div>
            <Link to='/nutricion'className="carousel-link">
              <div className="p-2 w-full h-96 md:h-72 bg-blue rou rounded-2xl flex flex-col items-center justify-center gap-2">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={sleep} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Nutrición</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/salud-mental'>
              <div className="p-2 w-full h-96 md:h-72 bg-blue rou rounded-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={sleep} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Salud Mental</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/deporte'>
              <div className="p-2 w-full h-96 md:h-72 bg-blue rou rounded-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={sleep} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Deporte</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/sueño'>
              <div className="p-2 w-full h-96 md:h-72 bg-blue rou rounded-2xl bg-black  flex flex-col items-center justify-center gap-2">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={sleep} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Sueño</p>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;