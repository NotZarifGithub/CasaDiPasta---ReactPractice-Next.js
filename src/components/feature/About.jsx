import Image from "next/image"
import { Fuggles } from "next/font/google"

// FONT FOR 'WELCOME' TEXT
const fuggles = Fuggles({ 
  subsets: ['latin'],
  weight: ['400']
})

const About = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center border-b lg:flex-row lg:py-[20px]'>

        {/* ABOUT IMAGE */}
        <div className="relative w-full h-[500px] lg:w-[600px]">
          <Image src={"/restaurant.jpg"} alt="" className="object-cover" fill/>
        </div>

        {/* ABOUT CONTENT */}
        <div className="flex flex-col items-center justify-center p-[30px] lg:p-[40px] max-w-[500px] md:max-w-[600px] lg:items-start text-white py-[130px]">
          <h1 className="items-center mb-5 text-2xl font-bold leading-none uppercase lg:text-4xl md:text-3xl">
            <span className={`${fuggles.className} text-6xl capitalize`}>explore</span><br />Our journey
          </h1>

          {/* ABOUT DESCRIPTION */}
          <div className="flex flex-col text-sm font-semibold">
            <p>
              Welcome to our Italian restaurant, where pasta reigns supreme. At our culinary haven, we specialize in crafting 
              exquisite pasta dishes that transport you straight to the heart of Italy. Each plate is a symphony of flavors, 
              artfully prepared with the freshest ingredients and a dash of amore. From classic favorites like Spaghetti 
              Carbonara and Linguine alle Vongole to creative innovations bursting with Mediterranean flair, our menu is a 
              pasta lover's dream come true. 
            </p>
            <br />
            <p>
              Join us at Casa Di Pasta and let our pasta creations take you on a culinary journey through the 
              enchanting streets of Italy. Buon appetito!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About