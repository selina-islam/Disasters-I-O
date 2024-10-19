import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Button } from '../Common/Button';
import { Card } from '../Dashboard/Card';
import { cn } from '../lib/utils/cn';

export const Filter = ({ welcome, heading, btntext, img, className }) => {
        return (
          <section className="py-3 lg:py-6 bg-whiteLight ">
            <div className="flex md:flex-row flex-col justify-between items-center mx-20 h-auto">
              <div className="text-graybold">
                <p className="text-[12px]">{welcome}</p>

                <h3
                  className={cn(
                    "text-[26px] font-bold text-black",
                    img && "flex justify-center items-center gap-3",
                    className
                  )}
                ><img src={img}/>
                  {heading}
                </h3>


              </div>
              <div className="flex justify-center items-center md:flex-row flex-col">
                <div className="flex md:flex-row flex-col">
                  <form className="flex md:flex-row flex-col gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search incident"
                        className="py-2 pl-10 pr-6 rounded-[6px] text-[12px] w-40 md:w-48 h-10 relative"
                      />
                      <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Sort By: Date modified"
                        className="py-2 px-6 rounded-[6px] text-[12px] w-40 md:w-48 h-10"
                      />
                    </div>
                  </form>
                </div>

                <div>
                  <Button className="m-3 text-white">{btntext}</Button>
                </div>
              </div>
            </div>
          </section>
        );
}
