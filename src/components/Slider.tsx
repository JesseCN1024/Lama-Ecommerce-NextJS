'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

const slides = [
    {
      id: 1,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "Winter Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Spring Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];

const Slider = () => {
    const [current, setCurrent] = React.useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    })
  return (
    <div className='h-[calc(100vh-80px)] w-full overflow-hidden relative mb-8'>
        <div className='w-max h-full flex transition-all ease-in-out duration-1000' style={{transform: `translateX(-${current*100}vw)`}}>
            {slides.map(slide => (
                <div className='w-screen h-full flex flex-col xl:flex-row' key={slide.id}>
                        {/* text container  */}
                  <div className="h-full xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                  <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                    {slide.description}
                  </h2>
                  <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                    {slide.title}
                  </h1>
                  <Link href={slide.url}>
                    <button className="rounded-md bg-black text-white py-3 px-4 ">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
                {/* IMAGE CONTAINER */}
                <div className="h-full xl:w-1/2 xl:h-full relative">
                  <Image
                    src={slide.img}
                    alt=""
                    fill
                    sizes="100%"
                    className="object-contain xl:object-cover"
                  />
                </div>
                    </div>
                    ))}
          </div>
        {/* buttons */}
        <div className='absolute bottom-8 flex gap-8' style={{
            left: "50%",
            transform: 'translateX(-50%)'
        }} >
         {
            slides.map((slide, index) => (
                <div className={`w-3 h-3 rounded-full cursor-pointer flex items-center justify-center bg-transparent border border=gray-900 ${current===index ? "scale-150" : "" }`}
                    key={index}
                    onClick={() => {
                        setCurrent(index)
                    }}
                >
                    {index === current && <div className='w-1 h-1 rounded-full bg-gray-900'></div>}
                </div>
            ))
         }
        </div>
        
    </div>
  )
}

export default Slider