import React from 'react'

export const GetCard = ({ img, title, descriton }) => {
  return (
    <div>
      <div className="bg-whiteLight text-graybold rounded-[10px] h-[269px] w-[235px] shadow-sm shadow-slate-300 gap-3">
        <div>
          <div className="mb-16 px-2 py-3">
            <img src={img} alt="" />
          </div>
        </div>
        <h3 className="text-[22px] text-black font-bold ml-2">{title}</h3>
        <h3 className="text-[14px] leading-5 ml-2">{descriton}</h3>
      </div>
    </div>
  );
};
