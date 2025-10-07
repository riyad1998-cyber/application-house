import React from 'react';
import googlePlay from "../assets/fi_16076057.png";
import playStore from "../assets/fi_5977575.png";
import bannerPic from "../assets/hero.png";
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className="max-w-[1700px] mx-auto px-4">
                <div className='flex flex-col items-center text-center'>
                    <h1 className='text-4xl sm:text-5xl md:text-[72px] font-bold leading-tight'>
                        We Build <br/>
                        <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>
                            Productive
                        </span> Apps
                    </h1>
                    <p className='text-base sm:text-[18px] md:text-[20px] text-gray-600 mt-4 md:mt-6'>
                        AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-center mt-6 md:mt-10 gap-4'>
                    <Link 
                        to="https://play.google.com/store/games?hl=en" 
                        target="_blank" 
                        className='flex items-center text-[16px] sm:text-[18px] md:text-[20px] font-semibold border-2 border-gray-300 p-2 md:px-4 md:py-3 rounded-lg hover:scale-105 transition-transform'
                    > 
                        <img className='mr-2 md:mr-3 h-6 md:h-8' src={googlePlay} alt="Google Play" />  
                        Google Play
                    </Link> 
                    <Link 
                        to="https://www.apple.com/app-store/"  
                        target="_blank" 
                        className='flex items-center text-[16px] sm:text-[18px] md:text-[20px] font-semibold border-2 border-gray-300 p-2 md:px-4 md:py-3 rounded-lg hover:scale-105 transition-transform'
                    > 
                        <img className='mr-2 md:mr-3 h-6 md:h-8' src={playStore} alt="App Store" /> 
                        App Store
                    </Link>
                </div>
                <figure className='flex items-center justify-center m-0 mt-6 md:mt-10'>
                    <img className='w-full max-w-4xl object-contain' src={bannerPic} alt="Banner" />
                </figure>
            </div>

            {/* Data Part Banner */}
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full'>
                <div className='max-w-[900px] mx-auto h-full flex flex-col justify-center py-8 md:py-12'>
                    <h1 className='text-2xl sm:text-3xl md:text-[48px] font-bold text-white text-center mb-6 md:mb-8'>
                        Trusted by Millions, Built for You
                    </h1>

                    <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8'>
                        <div className='text-white flex flex-col items-center text-center'>
                            <p className='text-sm sm:text-base md:text-lg'>Total Downloads</p>
                            <h1 className='text-3xl sm:text-4xl md:text-[64px] font-extrabold'>29.6M</h1>
                            <p className='text-sm sm:text-base md:text-lg'>21% more than last month</p>
                        </div>

                        <div className='text-white flex flex-col items-center text-center'>
                            <p className='text-sm sm:text-base md:text-lg'>Total Reviews</p>
                            <h1 className='text-3xl sm:text-4xl md:text-[64px] font-extrabold'>906K</h1>
                            <p className='text-sm sm:text-base md:text-lg'>46% more than last month</p>
                        </div>

                        <div className='text-white flex flex-col items-center text-center'>
                            <p className='text-sm sm:text-base md:text-lg'>Active Apps</p>
                            <h1 className='text-3xl sm:text-4xl md:text-[64px] font-extrabold'>132+</h1>
                            <p className='text-sm sm:text-base md:text-lg'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
