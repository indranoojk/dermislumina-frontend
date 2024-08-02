import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import '../index.css';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    let location = useLocation();

    if (location.pathname === "/profile") {
        return null;
    }

  return (
    <>
        {/* Navbar Starts here */}
        <nav className='flex lg:fixed lg:w-full lg:h-24 lg:top-0 lg:z-[9999] items-center justify-between flex-wrap bg-[#02030a] p-4 pr-10 lg:p-2 mt-0'>
            {/* Logo and Nav title */}
            <Link to='/'>
                <div className="flex items-center lg:h-16 flex-shrink-0 text-white lg:mr-8">
                    {/* <img className='w-28 block ' src={logo} alt="" />  */}
                    <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-3xl tracking-tight">Dermislumina</span>
                </div>
            </Link>

            {/* Menu hamburger button for mobile version */}
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            {/* Navbar elements */}
            <div className={`${isOpen ? `block` : `hidden`} w-full block ml-6 mb-4 lg:mb-0 flex-grow lg:flex lg:items-center lg:w-auto lg:text-right`}>
                <div className="text-base lg:flex-grow lg:space-x-12 italic mr-6">
                    <div></div>
                    <Link to="/" className={`block ${location.pathname === "/"? "underline underline-offset-8 text-purple-500": ""} mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4`} onClick={() => setIsOpen(!isOpen)}>Home</Link>

                    <Link to="/about" className={`block ${location.pathname === "/about"? "underline underline-offset-8 text-purple-500": ""} mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4`} onClick={() => setIsOpen(!isOpen)}>About</Link>

                    <Link to="/skincare" className={`block ${location.pathname === "/skincare"? "underline underline-offset-8 text-purple-500": ""} mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4`} onClick={() => setIsOpen(!isOpen)}>Assessment</Link>

                    <Link to="/remedies" className={`block ${location.pathname === "/remedies"? "underline underline-offset-8 text-purple-500": ""} mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4`} onClick={() => setIsOpen(!isOpen)}>Remedies</Link>
                </div>
            </div>

        </nav>
    </>
    
  )
}

export default Navbar
