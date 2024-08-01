import React from 'react'
import useScrollToTop from './useScrollToTop'

const Remedies = () => {

    useScrollToTop();

  return (
    <>
        <div className="flex">
            <img className='w-[25%]' src="https://images.pexels.com/photos/4004122/pexels-photo-4004122.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />

            <img className='w-[25%]' src="https://images.pexels.com/photos/461337/pexels-photo-461337.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />

            <img className='w-[25%]' src="https://images.pexels.com/photos/4004122/pexels-photo-4004122.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />

            <img className='w-[25%]' src="https://images.pexels.com/photos/4198714/pexels-photo-4198714.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />

        </div>
      

        <div className="ml-4">
            <h1 className="text-6xl p-5" style={{fontFamily: "'Cinzel', serif"}}>Home Remedies for Radiant Skin</h1>
            <p className="text-xl pl-8">Welcome to our guide on achieving glowing, healthy skin with natural home remedies. These simple, effective solutions use ingredients you likely already have in your kitchen. Let's dive into some of the best remedies for various skin concerns.</p>

            <div className="m-8 grid grid-cols-2 space-x-4">
                <div className="pr-20 mb-10  rounded-xl p-5">
                    <h3 className="text-4xl p-5 font-serif">1. Honey and Lemon Mask (for Skin brightening)</h3>
                    <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> 1 tablespoon of honey, 1 teaspoon of lemon juice</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Honey is a natural humectant that helps keep your skin moisturized, while lemon is rich in vitamin C, which brightens the skin and helps fade dark spots.</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Mix honey and lemon juice in a bowl. Apply the mixture to your face, avoiding the eye area. Leave it on for 15-20 minutes, then rinse off with warm water. Use this mask once a week for best results.</p>
                </div>

                <div className="m-10">
                    <img className='rounded-3xl w-[1280px] h-[380px]' src="https://images.pexels.com/photos/6422025/pexels-photo-6422025.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                </div>

                <div className="m-10">
                    <img className='rounded-3xl w-[1280px] h-[380px]' src="https://www.verywellfit.com/thmb/-WNnzwBOfzmjrENnf1eCn-eKHY0=/5262x3508/filters:fill(FFDB5D,1)/fresh-aloe-vera-gel-79555059-5c1932d346e0fb00017869f9.jpg" alt="" />
                </div>

                <div className="pr-20 mb-10  rounded-xl p-5">
                    <h3 className="text-4xl p-5 font-serif">2. Aloe Vera Gel (for Skin Hydration)</h3>
                    <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> Fresh aloe vera leaf</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Aloe vera is renowned for its soothing and healing properties. It hydrates the skin, reduces inflammation, and can help with sunburns and acne.</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Cut an aloe vera leaf and extract the gel. Apply the gel directly to your face and let it sit for 10-15 minutes. Rinse with cool water. Use this remedy daily for smooth, supple skin.</p>
                </div>


                <div className="pr-20 mb-10  rounded-xl p-5">
                    <h3 className="text-4xl p-5 font-serif">3. Turmeric and Yogurt Pack (for Clear and light skin)</h3>
                    <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> 1 teaspoon of turmeric powder, 2 tablespoons of yogurt</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Turmeric has anti-inflammatory and antibacterial properties, which help to clear acne and reduce redness. Yogurt contains lactic acid that gently exfoliates and moisturizes the skin.</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Combine turmeric powder and yogurt to form a paste. Apply the mixture to your face and let it sit for 10-15 minutes. Rinse off with lukewarm water. Use this pack once or twice a week for a radiant complexion.</p>
                </div>

                <div className="m-10">
                    <img className='rounded-3xl w-[1280px] h-[380px]' src="https://images.pexels.com/photos/5852199/pexels-photo-5852199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>

                <div className="m-10">
                    <img className='rounded-3xl w-[1280px] h-[380px]' src="https://images.pexels.com/photos/3639181/pexels-photo-3639181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>

                <div className="pr-20 mb-10  rounded-xl p-5">
                    <h3 className="text-4xl p-5 font-serif">4. Oatmeal and Milk Scrub (for smooth skin)</h3>
                    <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> 2 tablespoons of oatmeal, 2 tablespoons of milk</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Oatmeal acts as a gentle exfoliant, removing dead skin cells and unclogging pores. Milk contains lactic acid, which softens and brightens the skin.</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Mix oatmeal and milk to create a paste. Gently massage the mixture onto your face in circular motions for a few minutes. Rinse with warm water. Use this scrub once a week to maintain smooth, clear skin.</p>
                </div>

                <div className="pr-20 mb-5  rounded-xl p-5">
                    <h3 className="text-4xl p-5 font-serif">5. Cucumber and Rose Water Toner (for skin hydration)</h3>
                    <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> 1 cucumber, 2 tablespoons of rose water</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Cucumber has cooling and hydrating properties, while rose water soothes and tones the skin.</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Blend the cucumber and strain the juice. Mix the cucumber juice with rose water. Apply the toner to your face using a cotton pad. This toner can be used daily for refreshing and toning your skin.</p>
                </div>

                <div className="m-10">
                    <img className='rounded-3xl w-[1280px] h-[380px]' src="https://images.pexels.com/photos/1517361/pexels-photo-1517361.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                </div>

                <div className="m-10">
                    <img className='rounded-3xl w-[1280px] h-[380px]' src="https://i.pinimg.com/474x/af/ea/ab/afeaaba1628fe2472b3d82f854820de2.jpg" alt="" />
                </div>

                <div className="pr-20 mb-5  rounded-xl p-5">
                    <h3 className="text-4xl p-5 font-serif">6. Rice Water Toner and Mask (for anti-aging)</h3>
                    <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> Rice water, honey (optional)</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Rice water is rich in vitamins and minerals, promoting a brighter, more even complexion. Honey adds hydration and nourishment.</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Ferment rice water for a day or two. Use as a toner or mix with honey for a mask. Pat into skin and let absorb.</p>
                </div>

                <div className="pr-20 mb-5  rounded-xl p-5">
                    <h3 className="text-4xl p-5 font-serif">7. Green Tea Calming Pack (for skin soothing)</h3>
                    <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> Green tea bags, yogurt</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Green tea is packed with antioxidants, while yogurt soothes and hydrates.</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Brew green tea bags and let them cool. Blend with yogurt. Apply to face for 15-20 minutes, then rinse.</p>
                </div>

                <div className="m-10">
                    <img className='rounded-3xl w-[1280px] h-[380px]' src="https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                </div>

                <div className="m-10">
                    <img className='rounded-3xl w-[1280px] h-[380px]' src="https://images.pexels.com/photos/33260/honey-sweet-syrup-organic.jpg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                </div>

                <div className="pr-20 mb-5  rounded-xl p-5">
                    <h3 className="text-4xl p-5 font-serif">8. Honey and Aloe Vera Sleeping Pack (for radiant skin)</h3>
                    <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> Honey, aloe vera gel</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Honey is a humectant, drawing moisture into the skin, while aloe vera soothes and hydrates.</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Mix equal parts honey and aloe vera gel. Apply a thick layer to skin before bed. Rinse off in the morning.</p>
                </div>

                <div className="pr-20 mb-5  rounded-xl p-5">
                    <h3 className="text-4xl p-5 font-serif">9. Avocado and Rice Oil Moisture Boost (for deep hydration)</h3>
                    <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> Avocado, rice oil</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Avocado is rich in vitamins and healthy fats, while rice oil provides deep hydration.</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Mash a ripe avocado and mix with a few drops of rice oil. Apply to damp skin and let absorb.</p>
                </div>

                <div className="m-10">
                    <img className='rounded-3xl w-[1280px] h-[380px]' src="https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                </div>

                <div className="m-10">
                    <img className='rounded-3xl w-[1280px] h-[380px]' src="https://images.pexels.com/photos/6422025/pexels-photo-6422025.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                </div>

                <div className="pr-20 mb-5  rounded-xl p-5">
                    <h3 className="text-4xl p-5 font-serif">Honey and Sugar Lip Scrub (to reduce hyper-pigmentation)</h3>
                    <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> Honey, sugar</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Gently exfoliates and hydrates lips.</p>
                    <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> : Mix equal parts honey and sugar. Gently massage onto lips, then rinse off. Follow with a lip balm.</p>
                </div>

            </div>

        </div>
        
            <div className="pr-20 m-16 p-8 bg-[#ba6a14] text-white rounded-lg">
                <h2 className="text-4xl font-semibold p-2">Final Tips:</h2>
                <ul className='text-2xl mb-2 p-4 list-disc list-inside'>
                    <li> do a patch test before trying any new remedy to ensure you don't have an allergic reaction.</li>
                    <li> a consistent skincare routine for best results.</li>
                    <li> hydrated and eat a balanced diet to support your skin from within.</li>
                </ul>
                <p className='text-2xl p-2'> Embrace these natural remedies to enhance your skincare routine and achieve a healthy, glowing complexion. Your skin will thank you for it!</p>
            </div>

    </>
  )
}

export default Remedies
