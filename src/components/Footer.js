import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {

  // eslint-disable-next-line
    const [isOpen, setIsOpen] = useState(false);
    
    let location = useLocation();

    if (location.pathname === "/profile") {
      return null;
  }

  return (
    <>
        <div className='grid grid-cols-2 lg:grid-cols-3 grid-rows-2 lg:grid-rows-subgrid bg-[#e6e3e3] text-white pb-4' style={{ backgroundImage: `url('https://images.pexels.com/photos/1158394/pexels-photo-1158394.jpeg?auto=compress&cs=tinysrgb&w=1280')` }}>
            <div className="flex items-center flex-shrink-0 text-white lg:mr-8 col-span-2">
                {/* <img className='w-16 lg:w-20 block ' src={logo} alt="" />  */}
                <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-4xl lg:pt-10 pl-10 tracking-tight text-white">Dermislumina</span>
            </div>

            <div className='ml-4 lg:ml-0 lg:col-start-2 lg:mt-4 text-center'>
              <ul className='font-serif text-2xl'>
                  <li className='p-2'>
                    <Link to='/' className={`block ${location.pathname === "/"? "underline underline-offset-8 text-cyan-500": ""} mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-800 mr-4`}>Home</Link>
                  </li>
                  <li className='p-2'>
                    <Link to='/about' className={`block ${location.pathname === "/about"? "underline underline-offset-8 text-cyan-500": ""} mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-800 mr-4`}>About Us</Link>
                  </li>
                  <li className='p-2'>
                    <Link to='/skincare' className={`block ${location.pathname === "/skincare"? "underline underline-offset-8 text-cyan-500": ""} mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-800 mr-4`}>Assessment</Link>
                  </li>
                  <li className='p-2'>
                    <Link to='/remedies' className={`block ${location.pathname === "/remedies"? "underline underline-offset-8 text-cyan-500": ""} mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-800 mr-4`}>Remedies</Link>
                  </li>
              </ul>
            </div>

            <div className=' ml-4 lg:ml-0 lg:col-start-3 lg:mt-4 text-center'>
              <ul className='font-serif text-2xl lg:flex'>
                  <li className='p-2'>
                    <Link to='/signup' className={`block ${location.pathname === "/signup"? "underline underline-offset-8 text-cyan-500": ""} mt-4 lg:inline-block lg:mt-0 bg-[#414040] px-2 lg:px-3 py-2 rounded-xl text-white hover:text-teal-500 mr-4`}>Sign up</Link>
                  </li>
                  <li className='p-2'>
                    <Link to='/login' className={`block ${location.pathname === "/login"? "underline underline-offset-8 text-cyan-500": ""} mt-4 lg:inline-block lg:mt-0 bg-[#3e3e3e] px-2 lg:px-3 py-2 rounded-xl text-white hover:text-teal-500 mr-4`}>Login</Link>
                  </li>
                  
              </ul>
            </div>



        </div>


        
        
    </>
  )
}

export default Footer
