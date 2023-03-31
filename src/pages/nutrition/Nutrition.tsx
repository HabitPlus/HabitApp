import React from 'react'
import Carrousel from './CarouselNutrition'
import Header from '../../components/header/Header'
import { BackButton } from '../../components/arrow/Arrow'
import Nav from '../../components/nav/Nav'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'


interface DeporteProps {
  backgroundColor: string;
}
const Nutrition: React.FC<DeporteProps> = ({ backgroundColor }) => {
  
  const { t } = useTranslation();
  const cambiarIdioma = (idioma: string) => {
    i18n.changeLanguage(idioma);
  };

  
  return (
    <>
     <div>
     
      <button onClick={() => cambiarIdioma('ar')}>عربي</button>
      <button onClick={() => cambiarIdioma('es')}>Español</button>
      <p>{t('parrafo')}</p>
   
    </div>

      <Header />
      <BackButton />
      <Nav bgColor={'#53B965'} />
      <>
        <div className="">
          <h1 className='text-center mt-[8%] md:mt-[2%] text-3xl font-serif text-[#53B965]'>{t('Nutrición')}</h1>
        </div>
        <Carrousel />
        <style type="text/css">
          {`
          body {
            background-color: ${backgroundColor};
          }
        `}
        </style>
      </>
    </>
  );
};

export default Nutrition;