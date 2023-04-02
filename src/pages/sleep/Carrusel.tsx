import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import dormirbien from '../../assets//sleep/dormirbien.svg'
import efectos from '../../assets//sleep/efectos.svg'
import habitos from '../../assets//sleep/habitos.svg'
import insomnio from '../../assets//sleep/insomnio.svg'
import profesional from '../../assets//sleep/profesional.svg'
import estrategias from '../../assets//sleep/estrategias.svg'
import Footer from '../../components/footer/Footer'

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
    <Footer bgColor={"#5A88FC"} />
      <div className="mt-[8%] md:mt-[2%] grid grid-cols-1 gap-6 mx-16 2xl:mt-[8%]">
        <Slider {...settings}>
          <div>
            <Link to='/dormir'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-40 md:w-36 mt-2 md:mt-10' src={dormirbien} alt="Dormir Bien" />
                <p className="text-black text-xl mt-2 text-center md:text-2xl md:mb-4">El Dormir Bien</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/insomnio'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-44 md:w-36 mt-2 md:mt-7' src={insomnio} alt="¿Qué es el Insomnio?" />
                <p className="text-black text-xl text-center md:text-2xl md:mb-4">¿Qué es el Insomnio?</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/efectos'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-36 md:w-32 mt-2 md:mt-9' src={efectos} alt="Causas y efectos del Insomnio" />
                <p className="text-black text-xl mt-4 text-center md:text-2xl md:mb-4">Causas y efectos del Insomnio</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/habitos'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-40 md:w-36 mt-2 md:mt-8' src={habitos} alt="Hábitos para Dormir Bien" />
                <p className="text-black text-xl text-center md:text-2xl md:mb-4">Hábitos para Dormir Bien</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/estrategias'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center gap-2">
                <img className='w-40 md:w-44 mt-14 md:mt-12' src={estrategias} alt="Estrategias para Favorecer el Sueño?" />
                <p className="text-black text-xl mt-4 text-center md:text-2xl md:mb-4">Estrategias para Favorecer el Sueño</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/consultarPro'>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center justify-center">
                <img className='w-40 md:w-40 mt-2 md:mt-8' src={profesional} alt="¿Cuándo Consultar a un Profesional?" />
                <p className="text-black text-xl mt-4 text-center md:mt-4 md:text-2xl md:mb-4">¿Cuándo Consultar a un Profesional?</p>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;