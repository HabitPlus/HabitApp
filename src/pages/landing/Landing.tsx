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

export default Landing;