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
        <div className='grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-subgrid bg-[#e6e3e3] text-black pb-4'>
            <div className="flex items-center flex-shrink-0 text-white lg:mr-8 col-span-2">
                {/* <img className='w-16 lg:w-20 block ' src={logo} alt="" />  */}
                <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-sm lg:text-4xl pt-10 pl-10 tracking-tight text-black">Dermislumina</span>
            </div>

            <div className='-mt-6 ml-4 lg:ml-0 lg:col-start-2 lg:mt-4 text-center'>
              <ul className='font-serif text-2xl'>
                  <li className='p-2'>
                    <Link to='/' className={`block ${location.pathname === "/"? "underline underline-offset-8 text-purple-700": ""} mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4`}>Home</Link>
                  </li>
                  <li className='p-2'>
                    <Link to='/about' className={`block ${location.pathname === "/about"? "underline underline-offset-8 text-purple-700": ""} mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4`}>About Us</Link>
                  </li>
                  <li className='p-2'>
                    <Link to='/skincare' className={`block ${location.pathname === "/skincare"? "underline underline-offset-8 text-purple-700": ""} mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4`}>Assessment</Link>
                  </li>
                  <li className='p-2'>
                    <Link to='/remedies' className={`block ${location.pathname === "/remedies"? "underline underline-offset-8 text-purple-700": ""} mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4`}>Remedies</Link>
                  </li>
              </ul>
            </div>

            <div className='-mt-6 ml-4 lg:ml-0 lg:col-start-3 lg:mt-4 text-center'>
              <ul className='font-serif text-2xl'>
                  <li className='p-2'>
                    <Link to='/signup' className={`block ${location.pathname === "/signup"? "underline underline-offset-8 text-purple-700": ""} mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4`}>Signup</Link>
                  </li>
                  <li className='p-2'>
                    <Link to='/login' className={`block ${location.pathname === "/login"? "underline underline-offset-8 text-purple-700": ""} mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4`}>Login</Link>
                  </li>
                  
              </ul>
            </div>



        </div>


        
        
    </>
  )
}

export default Footer
