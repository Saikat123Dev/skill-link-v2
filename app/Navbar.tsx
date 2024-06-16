"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/moving-border";

function Navbar() {
  return (
    <div className="fixed h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://m.economictimes.com/thumb/msid-92590513,width-1200,height-900,resizemode-4,imgsize-100510/productivity.jpg')" }}>
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 z-20 bg-black  bg-opacity-50">
        <div className="text-white text-xl md:text-2xl font-bold">ConnectAll</div>
        <div className="flex items-center space-x-4 md:space-x-6 text-white">
          
        <Link href="/profile" className="relative inline-block px-2 py-1 hover:text-teal-400 transition-transform transform duration-200 hover:scale-105">Profile
          </Link>
          
          <Link href="/search" className="hover:text-teal-400 transition-colors duration-200 hover:underline">Search
          </Link>
          
          <Link href="/groups" className="hover:text-teal-400 transition-colors duration-200 hover:underline">Groups
          </Link>
         
          <Link href="/projects" className="hover:text-teal-400 transition-colors duration-200 hover:underline">Projects
          </Link>
          <Button
            borderRadius="1.5rem"
            className="border-neutral-200 dark:border-slate-800 transform transition-transform duration-300 hover:scale-95 px-3 py-1"
          >
            
            <Link href="/login" className="text-white rounded-full">Join Now
            </Link>
          </Button>
        </div>
      </nav>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start p-4 md:p-6 space-y-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Connect.<br />Showcase.<br />Collaborate.<br />Succeed.
        </h1>
        <p className="text-white text-base md:text-lg">Integrate profiles, showcase skills, collaborate seamlessly, and grow together.</p>
        <Button
          borderRadius="1.75rem"
          className="dark:bg-slate-900 border-neutral-200 dark:border-slate-800 transform transition-transform duration-300 hover:scale-95"
        >
         
         <Link href="/login" className="text-white px-4 py-2 md:px-6 md:py-3 rounded-full">Join Now
          </Link>
        </Button>
      </div>
    </div>

  )
}

export default Navbar