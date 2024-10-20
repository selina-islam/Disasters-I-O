import React from 'react'


export const WhichCard = ({ img, incident }) => {
  return (
    <div>
     
      <div
        className=" flex
       md:flex-col justify-center items-center"
      >
        <div className="text-graybold bg-gray-300 rounded-[6px] w-[180px] h-[69px] flex justify-center items-center gap-2 border border-gray-300 m-1">
          <img src={img} alt="" className="size-[25px]" />
          <p className="text-[14px]">{incident}</p>
        </div>
      </div>
    </div>
  );
};
