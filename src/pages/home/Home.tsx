import React from 'react'
import { Link } from 'react-router-dom'
import nutrition from '../../assets/nutrition.svg'
import sleep from '../../assets/sleep.svg'
import saludmental from '../../assets/salud-mental.svg'
import deporte from '../../assets/deporte.svg'

const Home = () => {
  return (
    <div className="gap-20">
      {/* <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
      <div className="md:flex md:flex-col md:justify-center"> */}
        <div className="flex-rows-2 gap-24">
          <Link to='/nutricion'><button className="w-64 h-72 bg-blue rounded-2xl shadow-2xl bg-black md:bg-purple-400"><img className=''src={nutrition} alt="nutrición"></img>hi</button></Link>
          <Link to='/nutricion'><button className="w-64 h-72 bg-purple rounded-2xl shadow-2xl bg-black md:bg-purple-400"><img className=''src={sleep} alt="nutrición"></img>Nutrición</button></Link>
          <Link to='/nutricion'><button className="w-64 h-72 bg-orange rounded-2xl shadow-2xl bg-black md:bg-purple-400"><img className=''src={saludmental} alt="nutrición"></img>Nutrición</button></Link>
          <Link to='/nutricion'><button className="w-64 h-72 bg-green rounded-2xl shadow-2xl bg-black md:bg-purple-400"><img className=''src={deporte} alt="nutrición"></img>Nutrición</button></Link>
        </div>
      {/* </div>
      </div> */}

    </div>
    // <>
    //   <div className='grid grid-rows-2 justify-center mt-36'>
    //     <h1 className='font-serif text-4xl text-orange font-weight: 600 tracking-[0.5em]'>Habit+</h1>
    //   </div>
    //   <div className='flex flex-wrap justify-center gap-5'>
    //     <Link to='/nutricion'><button className='bg-[#00C27A] text-white mt-6 text-2xl rounded-2xl p-2'><img className=''src={nutrition} alt="nutrición"></img>Nutrición</button></Link>
    //     <Link to='/nutricion'><button className='bg-[#00C27A] text-white mt-6 text-2xl rounded-2xl'><img className=''src={sleep} alt="nutrición"></img>Nutrición</button></Link>
    //     <Link to='/nutricion'><button className='bg-[#00C27A] text-white mt-6 text-2xl rounded-2xl p-6'><img className=''src={saludmental} alt="nutrición"></img>Nutrición</button></Link>
    //     <Link to='/nutricion'><button className='bg-[#00C27A] text-white mt-6 text-2xl rounded-2xl p-4'><img className=''src={deporte} alt="nutrición"></img>Nutrición</button></Link>
    //   </div>
    // </>
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