
import React from 'react'
import Image from 'next/image'
import TypedText from '../typed'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto mt-10 px-5">
      {/* Left Section (Text) */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl  font-extrabold text-rose-700 font-sans">
          Latest Blogs On
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-4 font-semibold text-rose-500 font-serif">
        <TypedText />
        </h1>
      </div>

      {/* Right Section (Image) */}
      <div className="mt-10 lg:mt-0">
        <Image 
          src="/image2.png" 
          alt="Logo" 
          width={500} 
          height={500} 
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
    </div>
  )
}

export default Hero
