import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="px-[20px] ">
      <div>
        <div className="py-[20px]">
          <div className="py-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7">

            {/* ABOUT US */}
            <div className="py-[10px]">
              <h1 className="text-lg font-semibold uppercase py-[10px]">
                about us 
              </h1>
              <p className="font-medium py-[10px]">
                Savor the essence of Italy at our restaurant, where we craft exquisite pasta dishes, a culinary journey of 
                authentic flavors
              </p>

              {/* SOCIALS LINK */}
              <div className="flex flex-row gap-4 py-[10px]">
                <div className="relative w-[30px] h-[30px]">
                  <Link href='https://www.facebook.com'>
                    <Image src='/facebook.svg' alt='logo image' fill/>
                  </Link>
                </div>
                <div className="relative w-[30px] h-[30px]">
                  <Link href='https://www.instagram.com'>
                    <Image src='/instagram.svg' alt='logo image' fill/>
                  </Link>
                </div>
                <div className="relative w-[30px] h-[30px]">
                  <Link href='https://www.tiktok.com'>
                    <Image src='/tiktok.svg' alt='logo image' fill/>
                  </Link>
                </div>
              </div>
            </div>

            {/* RECENT BLOG */}
            <div className="py-[10px]">
              <h1 className="text-lg font-semibold uppercase py-[10px]">
                recent blog
              </h1>
              <div>

                {/* BLOG MAIN CONTENT */}
                <div className="flex fle-row">

                  {/* BLOG IMAGE */}
                  <div className="relative w-[150px] h-[80px] m-[10px]">
                    <Image src='/pasta.jpg' alt='blog image' className="object-cover" fill/>
                  </div>   
                  
                  {/* BLOG TITLE */}
                  <div>
                    <Link href={"/"}>
                      <div className="font-medium py-[10px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                      </div>
                    </Link>

                    {/* BLOG INFO */}
                    <div className="flex flex-row gap-3">
                      <div>
                        date
                      </div>
                      <div>
                        admin
                      </div>
                      <div>
                        comment
                      </div>
                    </div>
                  </div>
                </div>

                {/* BLOG MAIN CONTENT */}
                <div className="flex fle-row py-[10px]">

                  {/* BLOG IMAGE */}
                  <div className="relative w-[150px] h-[80px] m-[10px]">
                    <Image src='/pasta.jpg' alt='blog image' className="object-cover" fill/>
                  </div>

                  {/* BLOG TITLE */}
                  <div>
                    <div className="font-medium py-[10px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </div>

                    {/* BLOG INFO */}
                    <div className="flex flex-row gap-3">
                      <div>
                        date
                      </div>
                      <div>
                        admin
                      </div>
                      <div>
                        comment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT */} 
            <div className="py-[10px]">
              <h1 className="text-lg font-semibold uppercase py-[10px]">
                contact
              </h1>
              <div className="flex flex-col gap-3 py-[10px]">

                {/* MAP */}
                <div className="flex flex-row gap-4 pt-[10px]">
                  <div className="relative w-[20px] h-[20px] mt-1">
                    <Image src='/map.svg' alt="logo" fill/>
                  </div>
                  <Link href='https://www.google.com/maps/place/Petronas+Twin+Towers/@3.1467845,101.6882442,15z/data=!4m15!1m8!3m7!1s0x31cc49d3e30988d7:0x464a4b7fda23c09a!2sKuala+Lumpur+City+Centre,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur!3b1!8m2!3d3.146642!4d101.6958449!16s%2Fm%2F0j3gb1k!3m5!1s0x31cc37d12d669c1f:0x9e3afdd17c8a9056!8m2!3d3.1574693!4d101.7115639!16zL20vMHN5bHo?entry=ttu'>
                    <p className="max-w-[300px] font-medium">
                      Petronas Twin Towers, Petronas Twin Tower, Lower Ground (Concourse) Level, Kuala Lumpur City Centre, 50088 Kuala Lumpur
                    </p>
                  </Link>
                </div>

                {/* CONTACT */}
                <div className="flex flex-row gap-4">
                  <div className="relative w-[20px] h-[20px]">
                    <Image src='/phone.svg' alt="logo" fill/>
                  </div>
                  <p className="font-medium">
                    +6012 345 6789
                  </p>
                </div>

                {/* EMAIL */}
                <div className="flex flex-row gap-4">
                  <div className="relative w-[20px] h-[20px]">
                    <Image src='/mail.svg' alt="logo" fill/>
                  </div>
                  <Link href="mailto:flacko.programming@gmail.com">
                    <p className="font-medium">
                      flacko.programming@gmail.com
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
          {/* COPYRIGHTS */}
          <div className="flex items-center justify-center py-[20px]">
            <p>
              &copy; 2023 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer