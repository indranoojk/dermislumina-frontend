import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Age = () => {

    const [selectedAge, setselectedAge] = useState(null);

    const handleOptionClick = (option) => {
        setselectedAge(option);

        localStorage.setItem('selectedAge', option);
    }

    return (
        <>

            <div className="text-center lg:p-8 rounded-lg mb-10 relative">
                <img className='w-full h-[530px] object-cover rounded-3xl' src="https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                {/* <img className='w-full h-[530px] object-cover rounded-3xl' src="https://images.pexels.com/photos/6476116/pexels-photo-6476116.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" /> */}
                <div className="lg:w-96 grid gap-5 p-2 lg:ml-[33%] -mt-10 lg:mt-0 top-16 rounded-2xl absolute ml-8 mr-8">
                    <h3 className='text-4xl font-bold text-white font-serif'>How young you are?</h3>
                    <Link to='/skintype' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedAge === 'below 18' ? 'bg-white text-purple-600' : ''}`} value="below 18" name='age' onClick={() => handleOptionClick('below 18')}><button>below 18</button></Link>

                    <Link to='/skintype' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedAge === '18 - 24' ? 'bg-white text-purple-600' : ''}`} value="18 - 24" name='age' onClick={() => handleOptionClick('18-24')}><button>18 - 24</button></Link>

                    <Link to='/skintype' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedAge === '25 - 34' ? 'bg-white text-purple-600' : ''}`} value="25 - 34" name='age' onClick={() => handleOptionClick('25-34')}><button>25 - 34</button></Link>

                    <Link to='/skintype' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedAge === '35 - 44' ? 'bg-white text-purple-600' : ''}`} value="35 - 44" name='age' onClick={() => handleOptionClick('35-44')}><button>35 - 44</button></Link>

                    <Link to='/skintype' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedAge === 'above 45' ? 'bg-white text-purple-600' : ''}`} value="above 45" name='age' onClick={() => handleOptionClick('above 45')}><button>above 45</button></Link>
                </div>
            </div>

        </>
    )
}

export default Age
