"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { useState } from "react"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  
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
      path: 'about',
    },
    {
      id: 4,
      title: 'blog',
      path: 'blog',
    },
    {
      id: 5,
      title: 'contact',
      path: 'contact',
    },
  ]

  return (
    <header className="p-[10px] max-w-[1100px] mx-auto px-[20px]">
      <div className="flex items-center justify-between">

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
            <Link key={item.id} href={item.path}>
              {item.title}
            </Link>
          ))}
        </div>

        {/* BUTTON--SHADCN-UI */}
        <div className="hidden md:inline-block">
          <Button className="mr-[30px]">
            <Link href="/">
              Book a table
            </Link>
          </Button>
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
          <Button className="">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Book a table
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}

export default Navbar