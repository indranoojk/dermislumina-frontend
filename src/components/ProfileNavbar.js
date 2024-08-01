import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const ProfileNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    let navigate = useNavigate();

    let location = useLocation();

    const handleLogout = ()=> {
        if (Swal.fire({
          title: "Log out?",
          text: "Do you want to log out?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Log out!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Logged out!",
              icon: "success"
            });
            localStorage.removeItem('token');
            navigate("/")
          }
        })){
        
        }
      }

  return (
    <div>
      <nav className='flex fixed h-24 w-full top-0 z-[9999] items-center justify-between flex-wrap bg-[#02030a] p-0 pr-10 lg:p-2'>
                <div className="flex items-center lg:h-16 flex-shrink-0 text-white lg:mr-8">
                    {/* <img className='w-28 block ' src={logo} alt="" />  */}
                    <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-3xl tracking-tight hidden lg:block">Dermislumina</span>
                </div>

                <div className={`${isOpen ? `block` : `hidden`} w-full block ml-6 mb-4 lg:mb-0 flex-grow lg:flex lg:items-center lg:w-auto lg:text-right`}>
                <div className="text-base lg:flex-grow lg:space-x-12 italic mr-32">
                    <div></div>
                    <Link to="/profile" className={`block ${location.pathname === "/profile"? "underline underline-offset-8 text-purple-500": ""} mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4`} onClick={() => setIsOpen(!isOpen)}>Profile</Link>

                    {/* <Link to="/profile/skincare" className={`block ${location.pathname === "/skincare"? "underline underline-offset-8 text-purple-500": ""} mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4`} onClick={() => setIsOpen(!isOpen)}>Assessment</Link> */}
                </div>
            </div>

            <div className="absolute right-2 lg:right-4">
                <button onClick={handleLogout} className='bg-violet-600 hover:bg-slate-400 px-3 py-2 rounded-md'>Logout</button>
            </div>
        </nav>
    </div>
  )
}

export default ProfileNavbar
