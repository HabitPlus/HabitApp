import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Habit+</h1>
      <Link to='/nutricion'><button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-10 w-64 rounded-full'>Nutrición</button></Link>
      <Link to='/salud-mental'><button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-10 w-64 rounded-full'>Salud Mental</button></Link>
      <Link to='/deporte'><button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-10 w-64 rounded-full'>Deporte</button></Link>
      <Link to='/sueño'><button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-10 w-64 rounded-full'>Sueño</button></Link>
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