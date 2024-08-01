import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SkinConcerns = () => {

  const [selectedConcern, setselectedConcern] = useState(null);

    const handleOptionClick = (option) => {
        setselectedConcern(option);

        localStorage.setItem('selectedConcern', option);
    }

  return (
    <>
          <div className="m-20 pt-8">
            <h1 className="text-5xl p-4 font-medium font-serif">Skin care Assessment</h1>  
              <div className="text-center p-8 rounded-lg mb-10 relative">
                <img className='w-full h-[600px] object-cover rounded-3xl' src="https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                <div className="w-96 grid gap-5 p-2 ml-[33%] top-16 rounded-2xl absolute ">
                    <h3 className='text-4xl p-2 font-bold text-white'>What are your top skin concerns?</h3>
                    <Link to='/recommendations' className={`px-2 py-3 bg-[#eb9ce5] cursor-pointer rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedConcern === 'Acne or breakouts' ? 'bg-white text-purple-600' : ''}`} value="Acne or breakouts" name='age' onClick={() => handleOptionClick('acne')}><button>Acne or breakouts</button></Link>

                    <Link to='/recommendations' className={`px-2 py-3 bg-[#eb9ce5] cursor-pointer rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedConcern === 'Fine lines and wrinkles' ? 'bg-white text-purple-600' : ''}`} value="Fine lines and wrinkles" name='age' onClick={() => handleOptionClick('fineLines')}><button>Fine lines and wrinkles</button></Link>

                    <Link to='/recommendations' className={`px-2 py-3 bg-[#eb9ce5] cursor-pointer rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedConcern === 'Dark spots or pigmentation or uneven skin tone' ? 'bg-white text-purple-600' : ''}`} value="Dark spots or pigmentation or uneven skin tone" name='age' onClick={() => handleOptionClick('darkSpots')}><button>Dark spots or pigmentation or uneven skin tone</button></Link>

                    <Link to='/recommendations' className={`px-2 py-3 bg-[#eb9ce5] cursor-pointer rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedConcern === 'Dryness or flakiness' ? 'bg-white text-purple-600' : ''}`} value="Dryness or flakiness" name='age' onClick={() => handleOptionClick('dryness')}><button>Dryness or flakiness</button></Link>

                    <Link to='/recommendations' className={`px-2 py-3 bg-[#eb9ce5] cursor-pointer rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} ${selectedConcern === 'Redness or sensitivity' ? 'bg-white text-purple-600' : ''}`} value="Redness or sensitivity" name='age' onClick={() => handleOptionClick('redness')}><button>Redness or sensitivity</button></Link>
                </div>
            </div>
          </div>
    </>
  )
}

export default SkinConcerns
