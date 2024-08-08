import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import useScrollToTop from './useScrollToTop';

const Sunprotection = () => {

    useScrollToTop();

    const [selectedSunProtection, setselectedSunProtection] = useState(null);

    const handleOptionClick = (option) => {
        setselectedSunProtection(option);

        localStorage.setItem('selectedSunProtection', option);
    }

  return (
    <>
      <div className="-mt-20 lg:m-20 lg:pt-8">
        <h1 className="text-5xl p-4 mb-6 font-medium font-serif">Skin care Assessment</h1>
            <div className="text-center lg:p-8 rounded-lg mb-10 relative">
                <img className='w-full h-[510px] object-cover rounded-3xl ' src="https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
            <div className="lg:w-96 grid gap-5 p-2 lg:ml-[33%] -mt-10 lg:mt-0 top-16 rounded-2xl absolute ml-8 mr-8">
                  <h3 className='text-4xl font-bold text-white'>What's your approach to sun protection?</h3>
                    <Link to='/sleeptime' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick}  ${selectedSunProtection === 'Never leave the house without SPF'? 'bg-white text-purple-600' : ''}`} value="Never leave the house without SPF" name='sunprotection' onClick={() => handleOptionClick('Never leave the house without SPF')}><button>Never leave the house without SPF</button></Link>

                    <Link to='/sleeptime' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick}  ${selectedSunProtection === 'only on sunny days'? 'bg-white text-purple-600' : ''}`} value="only on sunny days" name='sunprotection' onClick={() => handleOptionClick('only on sunny days')}><button>only on sunny days</button></Link>

                    <Link to='/sleeptime' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick}  ${selectedSunProtection === 'Occasionally'? 'bg-white text-purple-600' : ''}`} value="Occasionally" name='sunprotection' onClick={() => handleOptionClick('Occasionally')}><button>Occasionally</button></Link>

                    <Link to='/sleeptime' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick}  ${selectedSunProtection === 'Rarely use sunscreen'? 'bg-white text-purple-600' : ''}`} value="Rarely use sunscreen" name='sunprotection' onClick={() => handleOptionClick('Rarely use sunscreen')}><button >Rarely use sunscreen</button></Link>

                </div>    
            </div>


            {/* {selectedSunProtection && (
                <p className='mt-4 text-center'>You selected: {selectedSunProtection}</p>
            )} */}


            <Link to="/skintone">
                <div className="text-2xl pl-20 -mt-16">
                    <span> &larr; Back</span>
                </div>
            </Link>


        </div>
    </>
  )
}

export default Sunprotection
