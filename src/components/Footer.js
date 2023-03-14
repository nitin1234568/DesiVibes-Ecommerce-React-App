import React from 'react';
import { logo, payment } from "../assets";
import {ImGithub} from "react-icons/im"
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
    FaGithub,
    FaLinkedin
    
} from 'react-icons/fa'
import {MdLocation, MdLocationOn} from 'react-icons/md'
import {BsPersonFill,BsPaypal} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont h-auto'>
    <div className='max-w-screen-xl mx-auto flex gap-8'>
    <div className='flex flex-col mr-5'>
    <img src={logo} alt='logo-bottom' className='w-24 ml-12'/>
     <p className='text-white text-sm tracking-wide ml-12'>&copy;HardEngg.com</p>
     <img src={payment} alt='Payment-logo' className='w-56'/>
    </div>
    <div>
       <h2 className='text-center text-2xl font-semibold text-white mt-3'>Locate us</h2>
    <div className='text-base flex flex-col gap-4'>
    <p className='text-center mt-2'>Address: Chandrapur Maharashtra 4422401</p>
    <p className='text-center'>Mobile: 08873354832</p>
    <p className='text-center'>Phone: 0712-25-86-68</p>
    <p className='text-center'>Mail: Sortenick@gmail.com</p>
    </div>
       </div>
       <div className='ml-10 mt-2'>
        <h2 className='text-center text-2xl font-semibold text-white mt-1 '>Profile</h2>
      <div className='flex flex-col gap-2 text-base'>
      <p className='flex item-center gap-3 hover:text-white duration-300 cursor-pointer mt-2.5 ml-3'>
     <span>
        <BsPersonFill/>
     </span>
     My Account
      </p>
      <p className='flex item-center gap-3 hover:text-white duration-300 cursor-pointer mt-2.5 ml-3'>
     <span>
        <BsPaypal/>
     </span>
     Checkout
      </p>
      <p className='flex item-center gap-3 hover:text-white duration-300 cursor-pointer mt-2.5 ml-3'>
     <span>
        <FaHome/>
     </span>
     Order tracking
      </p>
      <p className='flex item-center gap-3 hover:text-white duration-300 cursor-pointer mt-2.5 ml-3'>
     <span>
        <MdLocationOn/>
     </span>
     Help & support
      </p>
       </div>
       </div>
       <div className='flex flex-col justify-center'>
        <input className='bg-transparent border px-4 py-2 text-sm w-80 ml-20 ' placeholder='e-mail' type="text"/>
        <button className='ml-20 text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>
        Subscribe</button>
       </div>
      </div>
      <div className='flex justify-center items-center gap-8 text-2xl text-gray-400 mt-20'>
    <a className='text-center' href="https://github.com/nitin1234568"><ImGithub className='hover:text-white duration-300 cursor-pointer'/></a>
    <a href='https://www.linkedin.com/in/nitin-sorte-954808150/'><FaLinkedin className='hover:text-white duration-300 cursor-pointer'/></a>
    <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
    <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
    <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
    <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
     </div>
    </div>
  );
}

export default Footer;
