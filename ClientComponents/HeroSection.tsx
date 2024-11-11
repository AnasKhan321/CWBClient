"use client"
import { Button } from "@/components/ui/button"  ; 
import { ReactTyped } from "react-typed";
import { useState } from "react";
import SwiperImages from "./SwiperImages"
import Link from "next/link"
export default function HeroSection(){
    const [title , settitle]  = useState(
        ["CodeWithBat"  ]
      )

    const [learnings , setlearnings]  = useState(
        ["TypeScript"  , "NodeJs"  , "PostGreySql"  , "SystemDesign"]  , 


    )
    return(
        <section className=" py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 mb-10 md:mb-0 ">
              <h1 className="text-4xl md:text-5xl mb-2">Welcome to                 <ReactTyped strings={title}  typeSpeed={50} style={{color : " #F8F805 "  , fontWeight : "bold"}}  />     </h1>
              <h3 className="text-2xl   mb-6">Learn    <ReactTyped strings={learnings}   typeSpeed={30} style={{color : " #F8F805 "  , fontWeight : "bold"}}   loop/>  </h3>
              <p className="text-xl mb-8">
                Start your coding journey with our comprehensive courses designed for beginners and experts alike. 
                Master the skills you need to succeed in the world of programming.
              </p>

            <div className="text-white
            ">

            </div>

            <div> 

              <Link href="/course"> 

            <Button variant="outline" className="bg-thirdColor   text-white  hover:bg-secondaryColor hover:text-white    ">
              Explore Courses
            </Button></Link>

            </div>


           
            </div>
            {/* Image */}
            <div className="md:w-1/2 hidden md:block ">

              <SwiperImages/> 
            </div>
          </div>
        </div>
      </section>
    )
}