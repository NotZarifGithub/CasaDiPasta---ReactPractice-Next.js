import Image from "next/image"
import { Fuggles } from "next/font/google"
import { Button } from "../ui/button"
import Link from 'next/link';

const fuggles = Fuggles({ 
  subsets: ['latin'],
  weight: ['400']
})

const MainMenu = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center border-b lg:flex-row lg:py-[90px]'>

        {/* MAINMENU CONTENT */}
        <div className="flex flex-col items-center justify-center p-[30px] lg:p-[40px] max-w-[500px] md:max-w-[600px] lg:items-end text-white py-[130px]">
          <h1 className="items-center mb-5 text-2xl font-bold leading-none uppercase lg:text-4xl md:text-3xl">
            <span className={`${fuggles.className} text-6xl capitalize`}>discover</span><br />Our menu
          </h1>

          {/* MAINMENU DESCRIPTION */}
          <div className="flex flex-col text-sm font-semibold">
            <p>
              Welcome to Casa Di Pasta, where pasta is our passion. Our menu features a delightful selection of Italian pasta dishes, 
              prepared with love and the finest ingredients. From classic Spaghetti Bolognese to our house-special Penne alla Vodka, 
              there's something for every pasta lover. Join us for a taste of Italy today!
            </p>
          </div>

          {/* BUTTON--SHADCN-UI */}
          <Button className='mt-8'>
            <Link href="/">
              View Menu
            </Link>
          </Button>
        </div>

        {/* ABOUT IMAGE */}
        <div className="relative w-full h-[500px] lg:w-[600px]">
          <Image src={"/restaurant.jpg"} alt="" className="object-cover" fill/>
        </div>
      </div>
    </section>
  )
}

export default MainMenu