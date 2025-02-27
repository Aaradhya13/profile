import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0">
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>MyInfoPortal </div>
            <div className='space-x-15'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
           
        </div>
    </nav>
  )
}

export default Navbar