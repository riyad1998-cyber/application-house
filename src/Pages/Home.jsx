import React from 'react';
import Banner from '../Components/Banner';
import useApplication from '../Hooks/useApplication';
import ApplicationsCard from '../Components/ApplicationsCard';
import { Link } from 'react-router';

const Home = () => {
    const {applications, loading, error} = useApplication();
    const featuredApplications = applications.slice(0,8)
    
    return (
        <div>
            <Banner></Banner>         
           <div>
<div className='flex flex-col text-center items-center'>
    <h1 className='text-[48px] font-bold'>Trending Apps </h1>
    <p className='text-[20px] text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
</div>
<div className='mx-auto max-w-[1700px] px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-4'>
{
    featuredApplications.map(app => <ApplicationsCard app={app} key={app.id}></ApplicationsCard>)
}
</div>
           </div>
           <div className='max-w-[1700px] w-full mx-auto flex items-center justify-center mt-6 mb-6 sm:mt-8 sm:mb-8 lg:mt-10 lg:mb-10 px-4 max-[425px]:px-2'>
  <Link
    to="/applications"
    className="btn flex items-center justify-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg w-[145px] h-12 sm:text-xl text-base max-[425px]:w-[120px] max-[425px]:h-10 max-[425px]:text-sm max-[375px]:w-[110px] max-[375px]:h-9 max-[375px]:text-[13px]"
  >
    Show All
  </Link>
</div>

        </div>
    );
};

export default Home;