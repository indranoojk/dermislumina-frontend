import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { baseUrl } from '../Urls';
import useScrollToTop from './useScrollToTop';

const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  useScrollToTop();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseUrl}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      Swal.fire({
        title: 'Success!',
        text: 'You have successfully signed up!',
        icon: 'success',
        confirmButtonText: 'Cool'
      });
      navigate("/login"); // Redirect to login page after successful signup
    } else {
        if (credentials.password.length < 8) {
            Swal.fire({
              title: 'Error!',
              text: 'Password must be at least 8 characters long',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(credentials.email)) {
            Swal.fire({
              title: 'Error!',
              text: 'Please enter a valid email address',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'Email already exists or invalid credentials',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-[#393839] p-5 text-white m-4 lg:m-16">
        <h2 style={{ fontFamily: "'Cinzel', serif" }} className='text-4xl font-bold font-serif w-48 m-20 text text-opacity-85 -tracking-tighter'>Sign Up</h2>
        <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-1">
          <form onSubmit={handleSubmit} id='signup' action="/signup" method="post">
            <div className='mb-3 lg:m-2'>
              <label htmlFor="name" className='text-lg text-[#bb9645]'>Name*</label> <br />
              <input type="text" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 pl-2' id='name' name='name' onChange={onChange} required />
            </div>
            <div className='mb-3 lg:m-2'>
              <label htmlFor="email" className='text-lg text-[#bb9645]'>Email*</label> <br />
              <input type="email" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 pl-2' id='email' name='email' onChange={onChange} required />
            </div>
            <div className='mb-3 lg:m-2'>
              <label htmlFor="password" className='text-lg text-[#bb9645]'>Password*</label> <br />
              <input type="password" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 pl-2' id='password' name='password' onChange={onChange} required />
            </div>
            <br />
            <div>
              <button type='submit' className='ml-20 bg-[#6b288f] lg:ml-32 px-12 lg:px-16 py-3 border-2 border-[#43156c] shadow-sm hover:shadow-xl shadow-[#f5f2f2]' onClick={handleSubmit}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;