import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import useScrollToTop from './useScrollToTop';

const Skintype = () => {

    useScrollToTop();

    const [selectedType, setselectedType] = useState(null);

    const handleOptionClick = (option) => {
        setselectedType(option);

        localStorage.setItem('selectedType', option);
    }

  return (
    <>
        <div className="-mt-20 lg:m-20 lg:pt-8">
            <h1 className="text-5xl p-4 font-medium font-serif">Skin care Assessment</h1>
            <div className="text-center lg:p-8 rounded-lg mb-10 relative">
                <img className='w-full h-[510px] object-cover rounded-3xl ' src="https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                <div className="lg:w-96 grid gap-5 p-2 lg:ml-[33%] -mt-10 lg:mt-0 top-16 rounded-2xl absolute ml-8 mr-8">
                    <h3 className='text-4xl font-bold text-white'>What's your skin type?</h3>
                    <Link to='/skintone' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedType === 'Oily'? 'bg-white text-purple-600' : ''}`} value="Oily" name='skintype' onClick={() => handleOptionClick('Oily')}><button>Oily</button></Link>

                    <Link to='/skintone' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedType === 'Dry and tight'? 'bg-white text-purple-600' : ''}`}  value="Dry and tight" name='skintype' onClick={() => handleOptionClick('Dry and tight')}><button>Dry and tight</button></Link>

                    <Link to='/skintone' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedType === 'Combination'? 'bg-white text-purple-600' : ''}`}  value="Combination" name='skintype' onClick={() => handleOptionClick('Combination')}><button>Combination</button></Link>

                    <Link to='/skintone' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick}  ${selectedType === 'Sensitive and Reactive'? 'bg-white text-purple-600' : ''}`} value="Sensitive and Reactive" name='skintype' onClick={() => handleOptionClick('Sensitive and Reactive')}><button>Sensitive and Reactive</button></Link>

                    <Link to='/skintone' className={`px-2 py-3 bg-[#eb9ce5] hover:transition hover:ease-in-out hover:delay-75 hover:-translate-y-1 hover:duration-500 cursor-pointer text-white lg:text-black rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick}  ${selectedType === 'Normal'? 'bg-white text-purple-600' : ''}`} value="Normal" name='skintype' onClick={() => handleOptionClick('Normal')}><button>Normal</button></Link>
                </div>    
            </div>


            {/* {selectedType && (
                <p className='mt-4 text-center'>You selected: {selectedType}</p>
            )} */}


            <Link to="/skincare">
                <div className="text-2xl pl-20 -mt-16 w-fit">
                    <button className='px-2 py-2 cursor-pointer text-white lg:text-black'> &larr; Back</button>
                </div>
            </Link>

        </div>
    </>
  )
}

export default Skintype
