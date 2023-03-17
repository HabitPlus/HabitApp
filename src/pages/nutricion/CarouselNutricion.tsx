import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import sleep from '../../assets/sleep.svg'


const CarouselNutricion = () => {
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
    <Slider {...settings}>
    <div className='mt-44'>
            <Link to='/nutricion'>
              <div className="p-2 w-full h-96 md:h-96 bg-greenutri rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-10">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={sleep} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Nutrición</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/nutricion'>
              <div className="p-2 w-full h-96 md:h-96 bg-greenutri rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-10">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={sleep} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Nutrición</p>
              </div>
            </Link>
          </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </>
    )
    }
      {/* <div className="mt-56">
        <Slider {...settings}>
          <div>
            <Link to='/nutricion'>
              <div className="p-2 w-full h-96 md:h-96 bg-greenutri rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-10">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={sleep} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Nutrición</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/nutricion'>
              <div className="p-2 w-full h-96 md:h-96 bg-greenutri rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-10">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={sleep} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Nutrición</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/nutricion'>
              <div className="p-2 w-full h-96 md:h-96 bg-greenutri rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-10">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={sleep} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Nutrición</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/nutricion'>
              <div className="p-2 w-full h-96 md:h-96 bg-greenutri rounded-2xl shadow-2xl bg-black md:bg-purple-400 flex flex-col items-center justify-center gap-10">
                <img className='w-24 md:w-32 mt-2 md:mt-5' src={sleep} alt="sueño" />
                <p className="text-black text-xl md:text-3xl md:mb-4">Nutrición</p>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
}; */}
{/* <div>
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
        </div> */}

{/* // </div > */}


export default CarouselNutricion