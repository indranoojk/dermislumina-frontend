import React from 'react'
import useScrollToTop from './useScrollToTop'

const About = () => {

    useScrollToTop();

  return (
    <>
      <div className="m-16 pt-10">
        <h1 className="text-4xl">About Us</h1>
        <p className="text-xl">Welcome to our skincare haven! We are delighted to share our passion for skincare with you. Our journey began with a shared dream and a deep love for all things skincare. We are Sheikh Shahista, Madduluri Manas, and Kamble Indranooj, three friends united by a common goal: to create a space where everyone can find the best in skincare.</p>
      </div>

      <div className="ml-20 p-10">
        <h1 className="text-4xl">Our Mission</h1>
        <p className="text-xl">Our mission is simple: to provide you with the best skincare advice, products, and tips to help you achieve radiant, healthy skin. We believe that skincare is not just about looking good but also about feeling good. By offering advice and carefully curated products, we aim to make skincare an enjoyable and effective part of your daily routine.</p>
      </div>
    </>
  )
}

export default About
