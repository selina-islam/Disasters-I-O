import React from 'react'
import { Stepbar } from '../lib/dv';
import { GetCard } from './GetCard';
import { Button } from '../Common/Button';


export const GetStarted = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[32px] font-bold text-black">Let’s get started</h1>
        <h3 className="text-[16px] text-graybold">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar
          sit general sac mascho werhoLorem ipsum dolar sit gene
        </h3>
      </div>

      <div className='flex justify-center items-center lg:w-[598px] md:w-[485px] sm:w-[355px] w-[250px] mx-auto mt-5'>
        <div className="lg:w-7 w-5 lg:h-7 bg-whiteLight rounded-full"></div>
        <hr className="bg-whiteLight w-[299px] h-[3px]" />
        <div className="lg:w-7 w-5 lg:h-7 bg-whiteLight rounded-full"></div>
        <hr className="bg-whiteLight w-[299px] h-[3px]" />
        <div className="lg:w-7 w-5 lg:h-7 bg-whiteLight rounded-full"></div>
                  </div>
                  

                  <div className='flex md:flex-row justify-center items-center gap-4 mt-6'>
                          {Stepbar.map((Stepbar, i) => (
                                  <GetCard key={i} {...Stepbar} />      
                          ))}
                  </div>



                  <div className='flex justify-center my-12'>
                          <Button>Get Started</Button>
                  </div>

    </div>
  );
};
