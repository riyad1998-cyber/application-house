import React, { useEffect, useState } from 'react';
import downloadSign from "../assets/icon-downloads.png"
import ratingSign from "../assets/icon-ratings.png"

const Installation = () => {
    const [installed, setInstalled] = useState([]);
    const [sortOrder, setSortOrder] = useState('default');

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('installing'));
        if (savedList) setInstalled(savedList);
    }, []);

    const parseDownloads = (valuess) => {
        if (!valuess) return 0;
        const cleaned = String(valuess);
        return parseFloat(cleaned);
    };

    const handleSortChange = (e) => {
        const order = e.target.value;
        setSortOrder(order);

        let sorted = [...installed];

        if (order === 'top') {
            sorted.sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
        } else if (order === 'bottom') {
            sorted.sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
        } else {
            const original = JSON.parse(localStorage.getItem('installing'));
            sorted = original;
        }

        setInstalled(sorted);
    };
    
    const handleUninstall = (id) => {
        const updatedList = installed.filter(app => app.id !== id);
        setInstalled(updatedList);
        localStorage.setItem('installing', JSON.stringify(updatedList));
    };

    return (
        <div>
            <div className='w-full max-w-[1700px] mx-auto p-4 flex flex-col items-center text-center'>
                <h1 className='text-[32px] sm:text-[40px] md:text-[48px] font-bold'>Your Installed Apps</h1>
                <p className='text-[16px] sm:text-[18px] md:text-[20px] text-gray-500'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/*Sort & Count*/}
            <div className='w-full max-w-[1700px] mx-auto p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
                <h1 className='text-[18px] sm:text-[20px] md:text-[22px] font-bold text-center sm:text-left'>
                    <span>{installed.length}</span> Apps Found
                </h1>

                <select
                    value={sortOrder}
                    onChange={handleSortChange}
                    className='border px-3 py-2 rounded-lg w-full sm:w-auto text-sm sm:text-base'
                >
                    <option value="default">Sort By Download</option>
                    <option value="top">High-Low</option>
                    <option value="bottom">Low-High</option>
                </select>
            </div>

            {/* App List*/}
            <div className='space-y-4'>
                {installed.map((instal, index) => (
                    <div key={index} className='w-full max-w-[1700px] mx-auto px-3 sm:px-4'>
                        <div className='bg-white shadow-sm flex flex-col sm:flex-row justify-between items-center sm:items-center p-4 rounded-lg gap-4'>
                            {/*Left */}
                            <div className='flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4'>
                                <figure className='w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0'>
                                    <img src={instal.image} alt="" className='w-full h-full object-cover rounded-md' />
                                </figure>

                                <div>
                                    <p className='font-medium text-[16px] sm:text-[18px] md:text-[20px]'>
                                        {instal.companyName} : {instal.title}
                                    </p>
                                    <div className='flex flex-wrap justify-center sm:justify-start items-center gap-3 mt-2'>
                                        <p className='flex items-center gap-1 font-semibold text-sm sm:text-base'>
                                            <img className='w-4 h-4' src={downloadSign} alt="" />{instal.downloads}
                                        </p>
                                        <p className='flex items-center gap-1 font-semibold text-sm sm:text-base'>
                                            <img className='w-4 h-4' src={ratingSign} alt="" />{instal.ratingAvg}
                                        </p>
                                        <p className='font-semibold text-sm sm:text-base'>{instal.size}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <button
                                onClick={() => handleUninstall(instal.id)}
                                className='w-full sm:w-[100px] h-10 sm:h-12 bg-[#00D390] font-semibold text-white rounded-lg hover:scale-105 transition-transform text-sm sm:text-base'
                            >
                                Uninstall
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Installation;
