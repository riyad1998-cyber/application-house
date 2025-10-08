import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [installed, setInstalled] = useState([]);
    useEffect(()=>{
        const savedList = JSON.parse(localStorage.getItem('installing'))
        if(savedList) setInstalled (savedList)
    },[])
    return (
        <div>
            <h1>Installations Aps {installed.length}</h1>

<div className='w-[1700px] mx-auto p-4 flex flex-col items-center'>
    <h1 className='text-[48px] font-bold'>Your Installed Apps</h1>
    <p className='text-[20px] text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
</div>

<div className='w-[1700px] mx-auto p-6 flex items-center justify-between'>
<h1 className='text-6 font-semibold'><span>{installed.length}</span> Apps Found</h1>
<button>Sort By Size</button>
</div>

<div>
    {
        installed.map(instal =>(
            <div>


        <div className='flex'>

<div >
    <figure className='w-20 h-20'>
        <img src={instal.image} alt="" />
    </figure>

</div>

        </div>


            </div>
        ) )
    }
</div>

        </div>
    );
};

export default Installation;