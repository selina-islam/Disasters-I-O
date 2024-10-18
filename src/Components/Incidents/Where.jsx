import React from 'react'

export const Where = () => {
  return (
    <div>
      <div className='h-[589px] w-[752px] gap-24'>
        <div>
          <h1 className='text-[24px] text-black font-bold'>Where’s the incident?</h1>
          <p className='text-[14px] text-graybold py-3'>
            Enter a GPS, address. or pin point on the map. Try to be as <br />
            accurate
            as possible, or click:Jurisdiction Wide
          </p>
        </div>
        <div>
          <img src="/img/where.png" alt="" className=''/>
        </div>
      </div>
    </div>
  );
}
