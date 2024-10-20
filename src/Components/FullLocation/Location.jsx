import React from "react";
import { Filter } from "../Shared/Filter";
import { locationHead } from "../lib/dv";
import { OneCard } from "./OneCard";
import { LocationData } from "../lib/dv";
import { TwoCard } from "./TwoCard";
import { ThreeCard } from "./ThreeCard";
import { locationActivity } from '../lib/dv'
import {locationDocument} from '../lib/dv'
import { FourCard } from "./FourCard";
const Location = () => {
  return (
    <section>
      <div>
        <Filter
          welcome="Incidents - DR-4699 March 2023 Severe Storms "
          heading="DR-4699 March 2023 Severe Storms"
          btntext="+New Location"
          img="/img/tree.png"
        />
      </div>
      <div className="gap-3 grid lg:grid-cols-2 grid-cols-1 justify-center items-start w-full">
        <div className="flex flex-col justify-start md:ms-5 ms-0 items-start gap-3 ">
          <div className="w-full">
            <div>
              <div className="flex flex-col justify-start items-start">
                {locationHead.map((s, i) => (
                  <OneCard key={i} {...s} />
                ))}
              </div>
            </div>

            <div className="border-b-2 border-t-2 py-9">
              <h4 className="text-[14px] font-bold text-black">Description</h4>
              <p className="text-[16px] text-graybold lg:w-[677px]">
                Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
                sit general sac mascho werhoLorem ipsum dolar sit general sac
                mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
                ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
                general sac mascho werho
              </p>
            </div>

            <div className="w-full mx-auto">
              <div className="flex justify-between mx-8 md:mx-0 md:gap-3">
                <p className="text-[14px] font-bold">Locations</p>
                <p className="text-graybold underline text-[14px]">See all</p>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-3 py-5 md:mx-0 md:w-full mx-auto w-fit">
                {LocationData.map((s, i) => (
                  <TwoCard key={i} {...s} />
                ))}
              </div>
            </div>

            <hr className="w-full bg-gray-200 my-7" />

            <hr className="w-full bg-gray-200 my-7" />

            {/* Activity section */}
            <div className="gap-3 py-5 md:mx-0 md:w-full w-[95%] mx-auto">
              <div className="flex justify-between mx-8 gap-1 md:mb-2">
                <p className="text-[14px] font-bold">Activity</p>
                <p className="text-[14px] text-gra underline">See all</p>
              </div>
              <div className="space-y-4">
                {locationDocument.map((z, i) => (
                  <FourCard
                    className={"md:w-full w-[95%] mx-auto"}
                    key={i}
                    {...z}
                  />
                ))}
              </div>
            </div>
            {/* document section */}
            <div className="gap-3 py-5 md:mx-0 md:w-full w-[95%] mx-auto">
              <div className="flex justify-between mx-8 gap-1 md:mb-2">
                <p className="text-[14px] font-bold">Documents</p>
                <p className="text-[14px] text-gra underline">See all</p>
              </div>
              <div className="space-y-4">
                {locationActivity.map((o, i) => (
                  <ThreeCard
                    className={"md:w-full w-[95%] mx-auto"}
                    key={i}
                    {...o}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" ms-10  flex flex-col justify-center items-start">
          <p className="p-1 text-graybold">Incident Map</p>
          <img src="/img/location-map.png" alt="" />
          <p className="p-1 text-graybold">
            Start 19.1232, -118.233 End 19.3245, -119.2323
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
