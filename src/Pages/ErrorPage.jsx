import React from 'react';
import errorImage from "../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-[#F0F0F0] w-full h-full flex flex-col justify-center items-center'>
            
                <div className='mt-[80px] mb-[80px]'>
                    <figure className='p-10'>
                <img className='w-[500px] h-[500px]' src={errorImage} alt="" />
            </figure>

            <div className='flex flex-col items-center'>
                <h1 className='text-[48px] font-semibold'>Oops, page not found!</h1>
                <p className='text-[20px] text-[#627382]'>The page you are looking for is not available.</p>
               <Link to="/" className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-lg hover:opacity-90 transition mt-[16px] font-bold"> Go Back!</Link>

                </div>
          
            </div>
        </div>
    );
};

export default ErrorPage;