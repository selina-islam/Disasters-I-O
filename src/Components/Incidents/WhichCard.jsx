import React from 'react'


export const WhichCard = ({ img, incident }) => {
  return (
    <div>
      <div
        className=" flex
       flex-col justify-center items-center"
      >
        <div className="font-bold text-black text-[24px] mb-3">
          <h1>Which of these best describes the incident?</h1>
        </div>

        <div className="text-graybold bg-gray-300 rounded-[6px] w-[180px] h-[69px] flex justify-center items-center gap-2 border border-gray-300 py-2 px-2 m-2">
          <img src={img} alt="" className="size-[25px]" />
          <p className="text-[14px]">{incident}</p>
        </div>
      </div>
    </div>
  );
};
