"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "@/app/globals.css"

// import required modules
import { Pagination  , Autoplay } from 'swiper/modules';



export default function SwiperImages() {
    const images = [
        "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
    
        modules={[Pagination  , Autoplay]}
        className="mySwiper"
      >
        {images.map((item  , index)=>(
                        <SwiperSlide key={index} >
                            <img src={item}/>
                        </SwiperSlide>

        ))}
      </Swiper>
    </>
  );
}
