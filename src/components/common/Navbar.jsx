"use client"

import Image from "next/image"
import Link from "next/link"
import Button from "../ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  // NAVIGATION DATA
  const navLinks = [
    {
      id: 1,
      title: 'home',
      path: '/',
    },
    {
      id: 2,
      title: 'menu',
      path: '/menu',
    },
    {
      id: 3,
      title: 'about',
      path: '/about',
    },
    {
      id: 4,
      title: 'blog',
      path: '/blog',
    },
    {
      id: 5,
      title: 'contact',
      path: '/contact',
    },
  ]

  return (
    <header className="p-[10px] px-[20px] z-20 relative border-b text-white bg-black">
      <div className="flex items-center justify-between max-w-[1100px] mx-auto">

        {/* LOGO IMAGE */}
        <div className="relative h-[90px] w-[90px] md:w-[110px] lg:w-[130px]">
          <Link href='/'>
            <Image 
              src='/logo.svg'
              alt="website logo"
              fill
            />
          </Link>
        </div>

        {/* NAVBAR LINKS */}
        <div className="hidden text-sm font-semibold uppercase lg:text-base gap-7 md:flex">
          {navLinks.map(item => (
            <Link key={item.id} href={item.path} className={`transition duration-300 ease-in-out hover:text-slate-700 ${router.pathname === item.path ? "text-slate-700" : ""}`}>
              {item.title}
            </Link>
          ))}
        </div>

        {/* BUTTON--SHADCN-UI */}
        <div className="hidden md:flex">
          <Link href="#booking">
            <Button 
              text={"book a table"}
              bgcolor={"bg-white"}
              textcolor={"text-black"}
            />
          </Link>
        </div>
        
        {/* HAMBURGER */}
        <div className="relative w-[35px] h-[35px] inline-block md:hidden mr-[10px]">
          {!isOpen ? (
            <Image
              src={'/hamburger-close.svg'}
              alt="hamburger icon"
              onClick={() => setIsOpen(true)}
              fill
            />  
          ) : (
            <Image
              src={'/hamburger-open.svg'}
              alt="hamburger icon"
              onClick={() => setIsOpen(false)}
              fill
            />
          )}
        </div>
      </div>

      {/* HAMBURGER DROPDOWN */}
      {isOpen && (
        <div className=" w-full top-[90px] flex flex-col text-sm font-semibold uppercase gap-7 mt-5">
          {navLinks.map(item => (
            <Link key={item.id} href={item.path} onClick={() => setIsOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Link href="#booking" onClick={() => setIsOpen(false)}>
            <Button className="w-full" text={"Book a table"} bgcolor={"bg-white"} textcolor={"text-black"}>
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar