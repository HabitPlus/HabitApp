<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import chica from '../../assets/girl-home1.svg'
import logo from '../../assets/logo-caritas.png'
import './Landing.css'


const Landing = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img src={logo} alt="logo" className='my-auto mx-auto w-full h-auto logo-img ' />
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <img src={chica} alt="chica-corriendo" className='w-full h-auto md:w-2/3 chica-img' />
        <Link to="/home">
  <button className="mx-auto mt-30 font-serif text-white font-weight: 600 bg-orange hover:bg-blue rounded-full p-3 w-64 h-10 tracking-[1rem] mb-5 md:ml-10 transition-colors duration-300">
    Habit+
  </button>
</Link>
      </div>
    </div>
  )
}

=======
import React from "react";
import { Link } from "react-router-dom";
import chica from "../../assets/girl-home1.svg";
import logo from "../../assets/logo-caritas.png";
import Header from "../../components/Header";
import styles from './Landing.module.css'

const Landing = () => {
  return (
    // <>
    // <div className={styles.header}>
    //   <Header />
      
    //   <div className=' flex flex-col md:flex-row items-center justify-center gap-20 mt-3 bg-yellow'>
    //     <img src={chica} alt="chica-corriendo" className="mt-24 md:w-4/6" />
    //     <Link to="/home">
    //       {" "}
    //       <button className="font-serif text-3xl text-white font-weight: 600 bg-orange hover:bg-red rounded-full py-1 pl-4 tracking-[0.5em] ">
    //         Habit+
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    // </>
    <>
      {/* <div className="flex justify-center mt-14">
        <img src={logo} alt="logo-caritas" />
      </div> */}
  <Header />
      <div className='flex flex-col md:flex-row items-center justify-center gap-20'>
        <img src={chica} alt="chica-corriendo" className="mt-20 md:w-1/3" />
        <Link to="/home">
          
          <button className="font-serif text-3xl text-white font-weight: 600 bg-orange hover:bg-red rounded-full py-1 pl-4 tracking-[0.5em] ">
            Habit+
          </button>
        </Link>
      </div>
    
    </>

  );
};

>>>>>>> 887593ea4c86d3cd1f65786392e4b0c0e814915d
export default Landing;