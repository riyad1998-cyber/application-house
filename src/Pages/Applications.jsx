import React, { useState } from 'react';
import useApplication from '../Hooks/useApplication';
import ApplicationsCard from '../Components/ApplicationsCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Applications = () => {
  const { applications } = useApplication();
  const [search, setSearch] = useState('');

  const filteredApps = applications.filter(app =>
    app.companyName.toLowerCase().includes(search.toLowerCase()) ||
    app.title.toLowerCase().includes(search.toLowerCase())
  );

let aplication;
if (filteredApps.length > 0) {
  aplication = filteredApps.map(app => (
    <ApplicationsCard app={app} key={app.id} />
  ));
} else {
 aplication = (
  <div className="col-span-full flex flex-col justify-center items-center h-40">
    <p className="text-gray-500 text-4xl font-bold mb-6">No Apps Found</p>
    <button
      onClick={() => setSearch('')}
      className="btn flex items-center justify-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg w-[145px] h-12 sm:text-xl text-base max-[425px]:w-[120px] max-[425px]:h-10 max-[425px]:text-sm max-[375px]:w-[110px] max-[375px]:h-9 max-[375px]:text-[13px]"
    >
      Show All
    </button>
  </div>
);
}

  return (
    <div>
      <div className='flex flex-col text-center items-center lg:mt-10 mt-6 sm:mt-8'>
        <h1 className='text-[48px] font-bold'>Our All Applications</h1>
        <p className='text-[20px] text-gray-600'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className='mx-auto max-w-[1700px] px-4 mt-4 flex flex-col sm:flex-row justify-between items-center gap-4'>
        <p className='text-[24px] font-semibold'>
          <span>({filteredApps.length})</span> Apps Found
        </p>

        <label className="relative w-full sm:w-[300px]">
          <input
            type="search"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </label>
      </div>

      <div className='mx-auto max-w-[1700px] px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 mb-10 gap-4'>
        {aplication}
      </div>
    </div>
  );
};

export default Applications;
