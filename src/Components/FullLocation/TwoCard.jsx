import React from 'react'

export const TwoCard = ({img, title, description, amount}) => {
  return (
    <div className="w-[400px] flex flex-col py-2 mb-5 px-2">
      <div>
        <img src={img} alt="" className="h-[178px] w-[214px]" />
      </div>
      <h1 className="text-[16px] text-black font-bold">{ title}</h1>
      <p className="text-[14px] text-graybold">
        {description}
      </p>
      <h2 className="text-[16px] text-black font-bold">{ amount}</h2>
    </div>
  );
}
