import React from 'react';
import Banner from '../Components/Banner';
import useApplication from '../Hooks/useApplication';
import ApplicationsCard from '../Components/ApplicationsCard';

const Home = () => {
    const {applications, loading, error} = useApplication()
    
    return (
        <div>
            <Banner></Banner>         
           <div>
<div className='flex flex-col text-center items-center'>
    <h1 className='text-[48px] font-bold'>Trending Apps </h1>
    <p className='text-[20px] text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
</div>
<div className='mx-auto max-w-[1700px] px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
{
    applications.map(app => <ApplicationsCard app={app} key={app.id}></ApplicationsCard>)
}
</div>

           </div>
        </div>
    );
};

export default Home;