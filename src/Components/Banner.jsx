import React from 'react';
import googlePlay from "../assets/fi_16076057.png"
import playStore from "../assets/fi_5977575.png"
import bannerPic from "../assets/hero.png"
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className="max-w-[1700px] mx-auto px-4">
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-[72px] font-bold'>We Build <br/> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-[20px] text-gray-600'>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex items-center justify-center mt-10 mb-10
            '>
               <Link to="https://play.google.com/store/games?hl=en" target="_blank" className='flex text-[20px] font-semibold border-2 border-gray-300 ml-4 p-2 rounded-lg'> <img className='mr-[10px]' src={googlePlay} alt="" />  Google Play</Link> 
               <Link to="https://www.apple.com/app-store/"  target="_blank" className='flex text-[20px] font-semibold border-2 border-gray-300 ml-4 p-2 rounded-lg'> <img className='mr-[10px]' src={playStore} alt="" /> App Store</Link>
            </div>
            <figure className='flex items-center justify-center'>
                <img src={bannerPic} alt="" />
            </figure>
        </div>
    );
};

export default Banner;