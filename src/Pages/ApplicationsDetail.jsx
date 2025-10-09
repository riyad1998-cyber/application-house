import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useApplication from '../Hooks/useApplication';
import downloadIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    LabelList,
    ResponsiveContainer
} from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplicationsDetail = () => {
    const { id } = useParams();
    const { applications, loading } = useApplication();
    const application = applications.find(app => app.id === Number(id));

    const [installedState, setInstalledState] = useState(false); 

    if (loading) return <p>Loading.....</p>;
    if (!application) return  <div className="col-span-full flex flex-col justify-center items-center h-40 h-150">
        <p className="text-gray-500 text-4xl font-bold mb-4">App Is Not Found!!</p>
        <p className='text-gray-500 mb-4'>The app you looking for does not exist or has been removed.</p>
        <Link
          to="/applications"
          className="btn flex items-center justify-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg w-[145px] h-12 sm:text-xl text-base max-[425px]:w-[120px] max-[425px]:h-10 max-[425px]:text-sm max-[375px]:w-[110px] max-[375px]:h-9 max-[375px]:text-[13px]"
        >
          Back Home
        </Link>
    </div>

    const {
        companyName, title, downloads, ratingAvg, image, size, Developer, reviews, ratings, description
    } = application;

    const hadnleInstalled = () => {
        const existingList = JSON.parse(localStorage.getItem('installing')) || [];
        const isDuplicate = existingList.some(apk => apk.id === application.id);
        if (isDuplicate) return alert('Already Added');

        const updatedList = [...existingList, application];
        localStorage.setItem('installing', JSON.stringify(updatedList));

        setInstalledState(true);

        toast.success(`${companyName} installed successfully!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    return (
        <div>
            <ToastContainer />

            <div className='flex flex-col lg:flex-row w-full max-w-[1700px] mx-auto gap-10 mt-[40px] px-4 sm:px-6'>
                <figure className='w-full sm:w-[300px] md:w-[350px] h-[300px] sm:h-[300px] md:h-[350px] mx-auto'>
                    <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
                </figure>

                <div className='flex-1'>
                    <div className="w-full border-b-[3px] border-gray-300 mb-6">
                        <div className="pb-3">
                            <h1 className='text-[24px] sm:text-[28px] md:text-[32px] font-bold text-center lg:text-left'>
                                {companyName} : {title}
                            </h1>
                            <p className='text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-center lg:text-left'>
                                Developed by <span className='text-purple-700'>{Developer}</span>
                            </p>
                        </div>
                    </div>

     
                    <div className='flex flex-col sm:flex-row  gap-8 mb-6'>
                        <div className='flex flex-col items-center'>
                            <img src={downloadIcon} alt="Downloads" className='w-8 h-8 sm:w-10 sm:h-9 mb-1' />
                            <p className='text-sm sm:text-base'>Downloads</p>
                            <h1 className='font-extrabold text-[32px] sm:text-[40px]'>{downloads}</h1>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={ratingsIcon} alt="Ratings" className='w-8 h-8 sm:w-10 sm:h-9 mb-1' />
                            <p className='text-sm sm:text-base'>Rating</p>
                            <h1 className='font-extrabold text-[32px] sm:text-[40px]'>{ratingAvg}</h1>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={reviewIcon} alt="Reviews" className='w-8 h-8 sm:w-10 sm:h-9 mb-1' />
                            <p className='text-sm sm:text-base'>Reviews</p>
                            <h1 className='font-extrabold text-[32px] sm:text-[40px]'>{reviews}</h1>
                        </div>
                    </div>

                    <div className='flex justify-center lg:justify-start'>
                        <button
                            onClick={hadnleInstalled}
                            disabled={installedState}
                            className={`px-6 py-3 rounded-lg font-semibold w-full sm:w-[239px] h-[50px] transition 
                                ${installedState ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] hover:bg-purple-800 text-white'}`}
                        >
                            {installedState ? 'Installed' : `Install Now (${size})`}
                        </button>
                    </div>
                </div>
            </div>

            {/* Rating Chart */}
            <div className="w-full max-w-[1700px] mx-auto mt-10 px-4 sm:px-6 border-b-2 border-gray-300">
                <h2 className="text-[24px] sm:text-[26px] md:text-[28px] font-bold mb-6 text-center lg:text-left">
                    Ratings
                </h2>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        layout="vertical"
                        data={[...ratings].sort((a, b) => b.name.localeCompare(a.name))}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    >
                        <XAxis type="number" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis type="category" dataKey="name" tick={{ fontSize: 14 }} width={80} axisLine={false} tickLine={false} />
                        <Bar dataKey="count" fill="#FFA500" barSize={30}>
                            <LabelList dataKey="count" position="bottom" style={{ fontSize: 12 }} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Description */}
            <div className='w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10'>
                <h1 className='text-2xl sm:text-2xl md:text-2xl font-bold'>Description</h1>
                <p className='mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base md:text-lg'>{description}</p>
            </div>
        </div>
    );
};

export default ApplicationsDetail;
