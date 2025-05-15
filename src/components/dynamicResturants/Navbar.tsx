import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantIcon from '../icons/RestaurantIcon'

export const Navbar = () => {
  return (
    <div className='w-full p-3'>
      <nav className=" flex items-center justify-between w-full h-16 bg-white shadow-md px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className='flex items-center justify-center w-12 h-12 bg-primary rounded-full'>
              <RestaurantIcon />
            </div>
            <div className='flex flex-col'>
              <p className="text-2xl font-bold text-gray-800 ml-2">Suplle</p>
              <p className="text-sm text-gray-600 ml-2">123 Main Street</p>
            </div>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
        </div>
      </nav>
    </div>
  )
}
