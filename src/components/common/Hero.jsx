"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Fuggles } from "next/font/google"

// FONT FOR 'WELCOME' TEXT
const fuggles = Fuggles({ 
  subsets: ['latin'],
  weight: ['400']
})

// DATA FOR HERO SECTION
const heroData = [
  {
    id: 1,
    title: 'Casa di Pasta: Where Italy Meets Your Plate',
    description: "Experience Italy through our pasta dishes. Each plate is a journey to the heart of Italian culinary tradition.",
    image: "/pasta1.jpg",
  },
  {
    id: 2,
    title: 'Pasta Perfection in Every Bite',
    description: "At our Italian restaurant, we believe every pasta dish should be perfection. Join us for a taste of culinary excellence.",
    image: "/pasta2.jpg",
  },
  {
    id: 3,
    title: 'Artisanal Pasta Delights',
    description: "Our artisanal pasta creations are a work of culinary artistry. Experience the perfect harmony of taste and texture.",
    image: "/pasta3.jpg",
  },
  {
    id: 4,
    title: 'The Pasta Affair',
    description: "Join us for a love affair with pasta! From classic spaghetti to gourmet ravioli, we create pasta perfection.",
    image: "/pasta4.jpg",
  },
]

const Hero = () => {

  // STATE FOR HERO SLIDER
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === heroData.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='h-[calc(100vh-140px)] flex justify-center'>
      
      {/* BACKGROUND IMAGES */}
      <div className="absolute z-0 w-full h-[calc(100vh-140px)] md:h-[calc(100vh-280px)] lg:h-[calc(100vh-260px)] md:top-0">
        <Image src={heroData[currentSlide].image} fill className="object-cover"/>
      </div>

      {/* HERO CONTENT */}
      <div className="absolute z-20 flex flex-col items-center justify-center h-1/2 gap-5 text-center px-[20px] md:mt-[50px] mt-[120px] lg:mt-[20px] md:max-w-[600px] lg:max-w-[800px]">
        <h1 className={`${fuggles.className} text-[70px] md:text-[80px] lg:text-[90px] ${currentSlide === 2 || currentSlide === 3 ? 'text-black' : 'text-white'}`}>
          welcome
        </h1>
        <div className={`text-2xl font-semibold md:text-4xl lg:text-5xl  ${currentSlide === 2 || currentSlide === 3 ? 'text-black' : 'text-white'}`}>
          {heroData[currentSlide].title}
        </div>
        <div className={`text-base md:text-xl lg:text-2xl font-medium ${currentSlide === 2 || currentSlide === 3 ? 'text-black ' : 'text-white'}`}>
          {heroData[currentSlide].description}
        </div>

        {/* BUTTON--SHADCN-UI */}
        <div className="flex gap-4">
          <Button>
            <Link href="/">
              Book a table
            </Link>
          </Button>
          <Button>
            <Link href="/">
              View Menu
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero