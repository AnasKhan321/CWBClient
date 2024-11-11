"use client"

import Link from "next/link"
import { Code, Menu, X } from "lucide-react"
import { useState } from "react"
import Profile from "./Profile"



export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [navbarPosition , setnavbarPosition]  = useState("right-[-1000px]")

    const toggleMenu = () =>{ 
        setIsMenuOpen(!isMenuOpen)
        setnavbarPosition(isMenuOpen? "right-[-1000px]"  : "right-0")



    }

    return(
<nav className="  bg-secondaryColor  shadow-xl  p-4 h-[90px]  ">
        <div className="container mx-auto flex justify-between items-center h-full ">
          <Link href="/" className="flex items-center space-x-2">
            <Code size={24} />
            <span className="text-xl font-bold">CodeWithBat</span>
          </Link>
        
               <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/course" className="hover:text-gray-300">Courses</Link>
            <Link href="/tutorial" className="hover:text-gray-300">Tutorials</Link>
            <Link href="/about" className="hover:text-gray-300">About Us</Link>
          </div>
         <Profile/>
      
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={ `flex flex-col items-center gap-y-2 h-screen absolute top-0 ${navbarPosition}  transition-all p-8
        bg-secondaryColor  shadow-2xl z-10`}>
             <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/course" className="hover:text-gray-300">Courses</Link>
            <Link href="/tutorial" className="hover:text-gray-300">Tutorials</Link>
            <Link href="/about" className="hover:text-gray-300">About Us</Link>

            <Profile/>



            
        

            <div onClick={toggleMenu} className="absolute left-2 top-2">

            <X size={18} /> 
            </div>
  


        </div>
      </nav>
    )
}