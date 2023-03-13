import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
<>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Link to='/home'>
  <button className='bg-[#00C27A] text-center align-middle text-black font-extrabold mt-6 text-2xl h-10 w-64 rounded-full'>Habit+</button>
  </Link>
  </>
  )
}

export default Landing