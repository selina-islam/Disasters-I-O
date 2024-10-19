import React from 'react'

export const OneCard = ({img, name, amount}) => {
  return (
    <div className='flex justify-items-start gap-1 py-2 '>
      <div className='size-[37px]'>
        <img src={img} alt="" />
      </div>
      <div>
        <p className='text-graybold'>{ name}</p>
        <h1 className='font-bold'>{ amount}</h1>
      </div>
    </div>
  );
}
