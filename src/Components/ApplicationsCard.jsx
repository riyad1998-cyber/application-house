import React from 'react';
import downloadImage from "../assets/icon-downloads.png";
import ratingImage from "../assets/icon-ratings.png";
import { Link } from 'react-router';

const ApplicationsCard = ({ app }) => {
  const { companyName, title, downloads, ratingAvg, image,id } = app;

  return (
    <Link to={`/application/${id}`}>
    <div className="card bg-base-100 w-full sm:w-[90%] md:w-auto shadow-sm p-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg max-[425px]:p-3 max-[375px]:p-2">
      

      <figure className="w-full h-64 sm:h-60 max-[425px]:h-[160px] max-[375px]:h-[140px] overflow-hidden rounded-md">
        <img
          src={image}
          alt="App"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="mt-3 mb-4 max-[425px]:mt-2 max-[375px]:mt-1">
        <h2 className="text-xl xs:text-base font-semibold text-gray-800 max-[425px]:text-base max-[375px]:text-sm">
          {companyName}
        </h2>
        <p className="text-4 xs:text-[16px] text-gray-500 mt-1 leading-snug max-[425px]:text-xs max-[375px]:text-[11px]">
          {title}
        </p>
      </div>

 
      <div className="flex justify-between items-center">
        <div className="w-[69px] sm:w-16 xs:w-14 h-[30px] bg-[#F1F5E8] flex items-center justify-center text-[#00D390] rounded-md px-2">
          <img className="w-4 h-4 mr-1" src={downloadImage} alt="Downloads" />
          <p className="font-bold text-sm sm:text-xs">{downloads}</p>
        </div>
        <div className="w-[69px] sm:w-16 xs:w-14 h-[31px] bg-[#F1F5E8] flex items-center justify-center rounded-md px-2">
          <img className="w-3 h-3 mr-1" src={ratingImage} alt="Rating" />
          <p className="text-[#FF8811] font-bold sm:text-xs">{ratingAvg}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ApplicationsCard;
