import React from 'react'
import arrowUp from '../utilities/Images/icons8-arrow-64-up.png'
import arrowDown from '../utilities/Images/icons8-arrow-64-down.png'
import { Link } from 'react-router-dom'
import darkSpot from '../utilities/Images/dark spots.jpg'
import redness from '../utilities/Images/redness.jpg'
import wrinkles from '../utilities/Images/wrinkles.jpg'
import dryskin from '../utilities/Images/dry skin.png'
import useScrollToTop from './useScrollToTop'
import Chatbot from './Chatbot'

const Home = () => {

    useScrollToTop();

  return (
    <>

        <div className="fixed top-[100px] lg:top-[115px] right-8 lg:right-5 z-10">
            <Link to='/skincare'>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg">Take Assessment</button>
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2">
            {/* row 1 */}
            <div className="lg:pl-5 row-start-2 lg:row-span-1 text-center">
                <h1 className="text-4xl lg:text-6xl lg:pt-52 p-5" style={{fontFamily: "'Cinzel', serif"}}>"Healthy skin is a reflection of overall wellness."</h1>
            </div>
            <div className="">
                <img className='w-full h-[400px] lg:w-[700px] lg:h-[550px] lg:float-right  object-cover' src="https://images.pexels.com/photos/7795791/pexels-photo-7795791.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
            </div>

            {/* row 2 */}
            <div className="">
                <img className='w-full h-[400px] lg:w-[700px] lg:h-[550px]  object-cover' src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
            </div>
            <div className="text-center">
                <h1 className="text-4xl lg:text-6xl lg:pt-52 p-5" style={{fontFamily: "'Dancing Script', cursive"}}>"Your skin is the best outfit, wear it with pride."</h1>
            </div>

            {/* row 3 */}
            <div className="lg:pl-5 row-start-6 lg:row-start-3 text-center">
                <h1 className="text-4xl lg:text-6xl lg:pt-52 p-5" style={{fontFamily: "'Cinzel', serif"}}>"Love the skin you're in."</h1>
            </div>
            <div className="">
                <img className='w-full h-[400px] lg:w-[700px] lg:h-[550px] lg:float-right  object-cover' src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
            </div>
   
        </div>


        <div className="p-20 lg:p-0 lg:m-20">
            <span className='text-3xl lg:text-4xl lg:-m-4 font-serif'>Skin Problems:</span>
            <div className="lg:grid lg:grid-cols-5 lg:grid-rows-2">
                {/* Grid 1 */}
                <div className="col-start-1">
                    <img className='w-[250px] h-[250px]' src="https://images.pexels.com/photos/6476081/pexels-photo-6476081.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                </div>
                <div className="row-start-2 col-start-1 text-center lg:pt-16">
                    <img className='pl-[95px]' src={arrowUp} alt="" />
                    <h2 className="text-4xl mb-8 lg:mb-0" style={{fontFamily: "'Dancing Script', cursive"}}>Acne</h2>
                </div>
                {/* Grid 2 */}
                <div className="row-start-2 col-start-2">
                    <img className='w-[250px] h-[250px]' src={dryskin} alt="" />
                </div>
                <div className="row-start-1 col-start-2 text-center lg:pt-20">
                    <img className='block lg:hidden pl-[95px]' src={arrowUp} alt="" />
                    <h2 className="text-4xl mb-8 lg:mb-0" style={{fontFamily: "'Dancing Script', cursive"}}>Dry skin</h2>
                    <img className='hidden lg:block pl-[95px]' src={arrowDown} alt="" />
                </div>
                {/* Grid 3 */}
                <div className="col-start-3">
                    <img className='w-[250px] h-[250px]' src={wrinkles} alt="" />
                </div>
                <div className="row-start-2 col-start-3 text-center lg:pt-16">
                    <img className='pl-[95px]' src={arrowUp} alt="" />
                    <h2 className="text-4xl mb-8 lg:mb-0" style={{fontFamily: "'Dancing Script', cursive"}}>Wrinkles</h2>
                </div>
                {/* Grid 4 */}
                <div className="row-start-2 col-start-4">
                    <img className='w-[250px] h-[250px]' src={darkSpot} alt="" />
                </div>
                <div className="row-start-1 col-start-4 text-center lg:pt-20">
                    <img className='block lg:hidden pl-[95px]' src={arrowUp} alt="" />
                    <h2 className="text-4xl mb-8 lg:mb-0" style={{fontFamily: "'Dancing Script', cursive"}}>Dark spots</h2>
                    <img className='hidden lg:block pl-[95px]' src={arrowDown} alt="" />
                </div>
                {/* Grid 5 */}
                <div className="col-start-5">
                    <img className='w-[250px] h-[250px]' src={redness} alt="" />
                </div>
                <div className="row-start-2 col-start-5 text-center lg:pt-16">
                    <img className='pl-[95px]' src={arrowUp} alt="" />
                    <h2 className="text-4xl mb-8 lg:mb-0" style={{fontFamily: "'Dancing Script', cursive"}}>Redness</h2>
                </div>            
            </div>
        </div>


        <Chatbot />
      
    </>
  )
}

export default Home
