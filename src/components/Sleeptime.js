import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import useScrollToTop from './useScrollToTop';

const Sleeptime = () => {

    useScrollToTop();

    const [selectedSleepTime, setselectedSleepTime] = useState(null);

    const handleOptionClick = (option) => {
        setselectedSleepTime(option);

        localStorage.setItem('selectedSleepTime', option);
    }

  return (
    <>
      <div className="-mt-20 lg:m-20 lg:pt-8">
        <h1 className="text-5xl p-4 mb-6 font-medium font-serif">Skin care Assessment</h1>
            <div className="text-center lg:p-8 rounded-lg mb-10 relative">
              <img className='w-full h-[510px] object-cover rounded-3xl ' src="https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                <div className="lg:w-96 grid gap-5 p-2 lg:ml-[33%] -mt-10 lg:mt-0 top-16 rounded-2xl absolute ml-8 mr-8">
                  <h3 className='text-4xl font-bold text-white'>How much sleep do you get on average?</h3>
                    <Link to='/skinconcerns' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] ${selectedSleepTime === 'Less than 5 hours'? 'bg-white text-purple-600' : ''}`} value="Less than 5 hours" name='sleeptime' onClick={() => handleOptionClick('Less than 5 hours')}><button>Less than 5 hours</button></Link>

                    <Link to='/skinconcerns' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] ${selectedSleepTime === '5-7 hours'? 'bg-white text-purple-600' : ''}`}  value="5-7 hours" name='sleeptime' onClick={() => handleOptionClick('5-7 hours')}><button>5-7 hours</button></Link>

                    <Link to='/skinconcerns' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] ${selectedSleepTime === '7-9 hours'? 'bg-white text-purple-600' : ''}`}  value="7-9 hours" name='sleeptime' onClick={() => handleOptionClick('7-9 hours')}><button>7-9 hours</button></Link>

                    <Link to='/skinconcerns' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe]   ${selectedSleepTime === 'More than 9 hours'? 'bg-white text-purple-600' : ''}`}  value="More than 9 hours" name='sleeptime' onClick={() => handleOptionClick('More than 9 hours')}><button>More than 9 hours</button></Link>

                </div>    
            </div>


            {/* {selectedSleepTime && (
                <p className='mt-4 text-center'>You selected: {selectedSleepTime}</p>
            )} */}

            <Link to="/sunprotection">
                <div className="text-2xl pl-20 -mt-16">
                    <span> &larr; Back</span>
                </div>
            </Link>

        </div>
    </>
  )
}

export default Sleeptime
