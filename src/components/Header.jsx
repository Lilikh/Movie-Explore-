import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='flex justify-around mt-8'>
       <Link to= "/">
        <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-center  text-red-600   tracking-widest mb-6 md:mb-12">
                Movie Night
            </h1>
       </Link>
        <Link to='/WatchList'>
            <button 
            className=' text-white bg-red-600 p-2 rounded-md sm:text-sm md:text-lg lg:text-lg ' >
            <i className="fas fa-list"> <span className='font-netflix '> Watch List </span> </i> 
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
