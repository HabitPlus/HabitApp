import { type } from 'os';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BackButton } from '../../../components/arrow/Arrow';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import Nav from '../../../components/nav/Nav';
import { InterfaceContent } from '../../../interfaces/content.interface';
import appService from '../../../services/newContentService';
import loguito from '../../../assets/general/girl-home1.svg';

export type Content = (
    InterfaceContent
    );

const ContentDetail = ()=>{
const [subsection, setSubsections] = useState<Content>()
const params = useParams()

useEffect(() => {
    const loadContent = async () => {
      if (params.id) {
        const subsection = await appService.getContentById(params.id)
        console.log(subsection)
        setSubsections(subsection)
      }
    }
    loadContent()
  }, [params.id])

    return (
        <>
        <Header />
      <BackButton />
      <Nav bgColor={'#53B965'} />
      <Footer bgColor={'#53B965'} />
      
      <div className='mb-20'>
          <h1 className='text-green-font font-serif text-center text-2xl md:text-3xl font-semibold mt-14'>{subsection?.title}</h1>

        <article className='grid grid-rows-1 indent-2 md:text-lg mt-8 px-8 lg:mx-72 text-justify'>

            <p>{subsection?.paragraph}</p>
        </article>
        <article className='grid grid-rows-1 justify-center p-8'>
          <img src={loguito} alt='Piramide de alimentos' />
        </article>
       
      </div>
      </>
    )
}

export default ContentDetail;