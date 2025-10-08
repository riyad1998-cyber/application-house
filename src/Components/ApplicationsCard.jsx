import React from 'react';
import image from "../assets/demo-app (1).webp";
import downloadImage from "../assets/icon-downloads.png";
import ratingImage from "../assets/icon-ratings.png";

const ApplicationsCard = ({ app }) => {
  const { companyName, description, downloads, ratingAvg } = app;

  return (
    <div className="card bg-base-100 w-96 shadow-sm p-4">
      <figure>
        <img src={image} alt="App" />
      </figure>

      <div className="mt-3 mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{companyName}</h2>
        <p className="text-sm text-gray-500 mt-1 leading-snug">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-[69px] h-[31px] bg-[#F1F5E8] flex items-center text-[#00D390] rounded-md px-2">
          <img
            className="w-[16px] h-[16px] mr-[6px]"
            src={downloadImage}
            alt="Downloads"
          />
          <p className="font-bold">{downloads}</p>
        </div>
        <div className="w-[69px] h-[31px] bg-[#F1F5E8] flex items-center rounded-md px-2">
          <img
            className="w-[16px] h-[16px] mr-[6px]"
            src={ratingImage}
            alt="Rating"
          />
          <p className="text-[#FF8811] font-bold">{ratingAvg}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsCard;
