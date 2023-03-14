import React from "react";
import { logo } from "../assets";
import { shopping } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const productData=useSelector((state)=>
  state.DesiVibes.productData);
  const userInfo=useSelector((state)=> state.DesiVibes.userInfo);
  console.log(userInfo);
  return (
    <div className="w-full h-24 bg-black border-b-[1px] border-gray-900 font-titleFont sticky top-0 z-50 border-white flex-wrap">
    <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
    <Link to="/">
    <div>
        <img className="w-24" src={logo} alt="logo" />
    </div>
    </Link>
    <div className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
            <li className="text-base text-white font-bold hover:text-black hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300  hover:bg-white rounded w-20 text-center h-7 text-lg">Home</li>
            <li className="text-base text-white  font-bold hover:text-black hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300  hover:bg-white rounded w-20 text-center h-7 text-lg">Pages</li>
            <li className="text-base text-white font-bold hover:text-black hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300  hover:bg-white rounded w-20 text-center h-7 text-lg">Shop</li>
            <li className="text-basetext-black text-white  font-bold hover:text-black hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300  hover:bg-white rounded w-20 text-center  h-7 text-lg" >Element</li>
            <li className="text-base text-white font-bold hover:text-black hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 hover:bg-white rounded w-20 text-center h-7 text-lg">Blog</li>
        </ul>
      <Link to="/cart">
      <div className="relative">
        <img src={shopping} alt="cart" className="w-10 invert"/>
        <span className="text-white absolute w-6 top-1 left-3 bottom-3 text-sm flex items-center justify-center font-semibold font-titleFont">{productData.length}</span>
        </div>
      </Link>
      <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="userLogo"
            />
          </Link>

          {userInfo && (
            <p className=" text-white text-base font-titleFont font-semibold underline underline-offset-8 cursor-pointer">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>

  );
};

export default Header;
