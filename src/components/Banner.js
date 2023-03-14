import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
    const [currentSlide,setCurrentSlide]=useState(0);
    const data=[

        "https://www.beyoung.in/blog/wp-content/uploads/2019/07/header.jpg",
        "https://www.beyoung.in/api/catalog/home-page-07-02-23/review/Printed-t-shirt-home-page-banner-mobile-view.jpg",
        "https://thegenuineleather.com/wp-content/uploads/2022/09/mens-hoodies.webp",
        "https://strapi-catalog-migrated.s3.ap-south-1.amazonaws.com/Hoodies_Banner_dc2df803d2.jpg",
        
     ];
     const prevSlide=()=>{
     setCurrentSlide(currentSlide === 0?3:(prev)=>prev-1);
     }
     const nextSlide=()=>{
        setCurrentSlide(currentSlide === 3?0:(prev)=>prev+1);
        }
        // console.log(currentSlide);
  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen  h-[650px] relative'>
        <div style={{transform:`translateX(-${currentSlide*100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
        <img className='w-screen h-full object-cover' loading='priority' src={data[0]} alt='banner01'/>
        <img className='w-screen h-full object-cover' src={data[1]} alt='banner02'/>
        <img className='w-screen h-full object-cover' src={data[2]} alt='banner03'/>
        <img className='w-screen h-full object-cover' src={data[3]} alt='banner04'/>
        </div>
        <div className='flex absolute w-fit left-0 right-0 mx-auto gap-11 bottom-44'>
            <div onClick={prevSlide} className='w-14 h-12  border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowLeft />
            </div>
            <div onClick={nextSlide} className='w-14 h-12  border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            
            <HiArrowRight />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
