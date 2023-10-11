import Image from "next/image"
import { Fuggles } from "next/font/google"
import Button from "../ui/button"
import Link from "next/link"

// FONT FOR 'WELCOME' TEXT
const fuggles = Fuggles({ 
  subsets: ['latin'],
  weight: ['400']
})

const hero = ({heropagetitle, image}) => {
  return (
    <section className='lg:h-[calc(100vh-370px)] h-[calc(100vh-140px)] md:h-[calc(100vh-390px)] flex justify-center'>
      
      {/* BACKGROUND IMAGES */}
      <div className="absolute z-0 w-full h-[calc(100vh-140px)] md:h-[calc(100vh-280px)] lg:h-[calc(100vh-260px)] md:top-0">
        <Image src={image} fill className="object-cover"/>
      </div>

      {/* HERO CONTENT */}
      <div className="absolute z-20 flex flex-col items-center justify-center h-1/2 gap-5 text-center px-[20px] md:mt-[50px] mt-[120px] lg:mt-[20px] md:max-w-[600px] lg:max-w-[800px] text-white">
        <h1 className={`${fuggles.className} uppercase text-[70px] md:text-[80px] lg:text-[90px]`}>
          {heropagetitle}
        </h1>

        {/* BUTTON--SHADCN  -UI */}
        <div className="flex gap-4">
          <Link href="/menu">
            <Button 
              text={"view menu"}
              bgcolor={"bg-black"}
              textcolor={"text-white"}
            />
          </Link>
          <Link href="#booking">
            <Button 
              text={"book a table"}
              bgcolor={"bg-black"}
              textcolor={"text-white"}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default hero