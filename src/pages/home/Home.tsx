import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate()
  const handleClick = () => {
    navigate("/nutricion");
  };

  return (
    <>
      <button>Home</button>
      <button onClick={handleClick} type="button"
        className="bg-red hover:bg-green cursor-pointer px-24 py-3 flex gap-8 rounded-sm text-black absolute bottom-20">
        Nutrición</button>
    </>
  )
}

export default Home