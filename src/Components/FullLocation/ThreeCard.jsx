import React from 'react'
import { cn } from '../lib/utils/cn';

export const ThreeCard = ({ img, title, location, des, amount, className }) => {
  return (
    <div className={cn(" lg:w-[679px] md:w-[550px] w-[400px] ", className)}>
      <div className=" bg-gray-300 flex justify-start items-center py-5 px-3 rounded-[10px]">
        <div>
          <img src={img} className="size-[74px] rounded[10px]" alt="" />
        </div>
        <div className="px-4">
          <h1 className="text-[16px] font-bold">{title}</h1>
          <p className="text-[14px] text-graybold">{ des}{location}</p>
          <h3 className="text-[16px] font-bold">{amount}</h3>
        </div>
      </div>
    </div>
  );
};
