import React from 'react'

export const GetCard = ({ img, title, description }) => {
  return (
    <div className="bg-whiteLight text-graybold rounded-[10px] h-[269px] w-[235px] shadow-sm shadow-slate-300 ">
      <div>
        <div className="mb-16 px-2 py-3">
          <img src={img} alt="" />
        </div>
      </div>
      <h3 className="text-[22px] text-black font-bold">{title}</h3>
      <h3 className="text-[14px] leading-5">{description}</h3>
    </div>
  );
};
