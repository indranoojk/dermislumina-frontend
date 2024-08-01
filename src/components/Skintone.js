import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import useScrollToTop from './useScrollToTop';

const Skintone = () => {

    useScrollToTop();

    const [selectedTone, setselectedTone] = useState(null);

    const handleOptionClick = (option) => {
        setselectedTone(option);

        localStorage.setItem('selectedTone', option);
    }

  return (
    <>

        <div className="m-20 pt-8">
            <h1 className="text-5xl p-4 mb-6 font-medium font-serif">Skin care Assessment</h1>
            <div className="text-center p-8 rounded-lg mb-10 relative">
                <img className='w-full h-[510px] object-cover rounded-3xl blur-[1px]' src="https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                <div className="w-96 grid gap-5 p-2 ml-[33%] top-16 rounded-2xl absolute">
                    <h3 className='text-4xl font-bold text-white'>Which of these best describes your skin tone?</h3>
                    <Link to='/sunprotection' className={`px-2 py-3 bg-[#eb9ce5] cursor-pointer rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick} transition duration-150 ${selectedTone === 'Fair or light'? 'bg-white text-purple-600' : ''}`} value="Fair or light" name='skintone' onClick={() => handleOptionClick('Fair or light')}><button>Fair or light</button></Link>

                    <Link to='/sunprotection' className={`px-2 py-3 bg-[#eb9ce5] cursor-pointer rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick}  transition duration-150 ${selectedTone === 'Medium or Wheatish'? 'bg-white text-purple-600' : ''}`} value="Medium or Wheatish" name='skintone' onClick={() => handleOptionClick('Medium or Wheatish')}><button>Medium or Wheatish</button></Link>

                    <Link to='/sunprotection' className={`px-2 py-3 bg-[#eb9ce5] cursor-pointer rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick}  transition duration-150 ${selectedTone === 'Tan or caramel'? 'bg-white text-purple-600' : ''}`} value="Tan or caramel" name='skintone' onClick={() => handleOptionClick('Tan or caramel')}><button>Tan or caramel</button></Link>

                    <Link to='/sunprotection' className={`px-2 py-3 bg-[#eb9ce5] cursor-pointer rounded-md text-xl hover:bg-[#fffefe] onClick={handleClick}  transition duration-150 ${selectedTone === 'Deep or rich'? 'bg-white text-purple-600' : ''}`} value="Deep or rich" name='skintone' onClick={() => handleOptionClick('Deep or rich')}><button>Deep or rich</button></Link>
                </div>    
            </div>


            {/* {selectedTone && (
                <p className='mt-4 text-center'>You selected: {selectedTone}</p>
            )} */}

            <Link to="/skintype">
                <div className="text-2xl pl-20 -mt-16">
                    <span> &larr; Back</span>
                </div>
            </Link>

        </div>
    </>
  )
}

export default Skintone
