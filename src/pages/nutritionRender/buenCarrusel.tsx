import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import cocina from '../../assets/nutrition/cocina-saludable.svg';
import loguito from '../../assets/general/girl-home1.svg';
import consejos from '../../assets/nutrition/consejos-alimentos.svg';
import compra from '../../assets/nutrition/compra-economica.svg';
import recetas from '../../assets/nutrition/recetas-saludables.svg';
import Footer from '../../components/footer/Footer'
import appService from '../../services/newContentService'
import { InterfaceContent } from '../../interfaces/content.interface';

export type Content = (
    InterfaceContent
    );

const BuenCarrusel = () => {
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

  const [sections, setSections] = useState<Content[]>();

  useEffect(() => {
    const loadContent = async () => {
      const content = await appService.getContent();
      console.log(content);
      setSections(content);
    };
    loadContent();
  }, []);

  return (
    <>
      <Footer bgColor={'#53B965'} />
      <div className="mt-[8%] md:mt-[2%] grid grid-cols-1 gap-6 mx-16">
        <Slider {...settings}>
          <div>
          {sections?.map((content:any) => (
            <div
            key={content?._id}
            >
            <Link to={`/nutritionrender/${content._id}`}>
              <div className="p-2 w-full h-96 md:h-72 bg-white rounded-2xl shadow-2xl bg-black flex flex-col items-center 
        justify-center gap-2">
                <img className='w-48 md:w-40 mt-2 md:mt-5' src={loguito} alt="cocina saludable" />
                <p className="text-black text-xl mt-3 text-center md:text-2xl md:mb-4">{content?.title}</p>
              </div>
            </Link>
            </div>
          ))},
          </div>
          
        </Slider>
      </div>
    </>
  );
};

export default BuenCarrusel;