import React from 'react'
import { Link } from 'react-router-dom'
import nutrition from '../../assets/nutrition.svg'
import sleep from '../../assets/sleep.svg'
import saludmental from '../../assets/salud-mental.svg'
import deporte from '../../assets/deporte.svg'

const Home = () => {
  return (
    <>
      <div className='grid grid-rows-2 justify-center mt-36'>
        <h1 className='font-serif text-4xl text-orange font-weight: 600 tracking-[0.5em]'>Habit+</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-5'>
        <Link to='/nutricion'><button className='bg-[#00C27A] text-white mt-6 text-2xl rounded-2xl p-2'><img className=''src={nutrition} alt="nutrición"></img>Nutrición</button></Link>
        <Link to='/nutricion'><button className='bg-[#00C27A] text-white mt-6 text-2xl rounded-2xl'><img className=''src={sleep} alt="nutrición"></img>Nutrición</button></Link>
        <Link to='/nutricion'><button className='bg-[#00C27A] text-white mt-6 text-2xl rounded-2xl p-6'><img className=''src={saludmental} alt="nutrición"></img>Nutrición</button></Link>
        <Link to='/nutricion'><button className='bg-[#00C27A] text-white mt-6 text-2xl rounded-2xl p-4'><img className=''src={deporte} alt="nutrición"></img>Nutrición</button></Link>
      </div>
    </>
  )
}

export default Home
// const Home = () => {
//   const navigate= useNavigate()
//   const handleClick = () => {
//     navigate("/nutricion");
//   };

//   return (
//     <>
//       <button>Home</button>
//       <button onClick={handleClick} type="button"
//         className="bg-red hover:bg-green cursor-pointer px-24 py-3 flex gap-8 rounded-sm text-black absolute bottom-20">
//         Nutrición</button>
//     </>
//   )
// }

// export default Home