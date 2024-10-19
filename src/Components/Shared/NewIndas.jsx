import React from 'react'
import { Button } from '../Common/Button';

export const NewIndas = ({ btntext, backbtn, welcome, heading,back, next }) => {
  
  return (
    <section className="bg-whiteLight lg:py-y py-3">
      <div className="flex md:flex-row flex-col justify-between items-center mx-2 gap-3">
        <div className="flex">
          <div className="flex justify-center items-center">
            <img src="/img/Close.png" alt="" />
          </div>
          <div>
            <p className=" text-12 text-graybold">{welcome}</p>
            <h2 className=" text-[26px] font-bold text-black">{heading}</h2>
          </div>
        </div>

        <div>
          <div className="lg:w-[527px] md:w-[475px] sm:w-[327px] w-[227px] bg-gray-300 h-[5px] rounded-full">
            <div className="bg-orange lg:w-[200px] md:w-[160px] sm:w-[100px] w-[70px] h-[5px] rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <Button onClick={back} className="mx-auto text-graybold me-3 bg-[#FAFAFA] border-[#D4D4D8]">
              {backbtn}
            </Button>
          </div>
          <div>
            <Button onClick={next}>{btntext}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
