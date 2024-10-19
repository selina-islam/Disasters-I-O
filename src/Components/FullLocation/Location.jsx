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
      <div className="gap-3 mx-14 flex  md:flex-row  ">
        <div className=" h-[1582px] w-[680px] justify-start items-center">
          <div>
            <div className="flex flex-col justify-start items-start">
              {locationHead.map((s, i) => (
                <OneCard key={i} {...s} />
              ))}
            </div>
          </div>

          <div className="border-b-2 border-t-2 py-9">
            <h4 className="text-[14px] font-bold text-black">Description</h4>
            <p className="text-[16px] text-graybold w-[677px]">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit general sac
              mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
              ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
              general sac mascho werho
            </p>
          </div>

          <div>
            <div className="flex justify-between">
              <p className="text-[14px] font-bold">Locations</p>
              <p className="text-graybold underline text-[14px]">See all</p>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-3">
              {LocationData.map((s, i) => (
                <TwoCard key={i} {...s} />
              ))}
            </div>
          </div>

          {/* Activity section */}
          <div className="gap-3 py-5 ">
            <div className="flex justify-between">
              <p className="text-[14px] font-bold">Documents</p>
              <p className="text-[14px] text-gra underline">See all</p>
            </div>
            {locationActivity.map((o, i) => (
              <ThreeCard key={i} {...o} />
            ))}
          </div>

          {/* document section */}
          <div>
            <div className="flex justify-between">
              <p className="text-[14px] font-bold">Activity</p>
              <p className="text-[14px] text-gra underline">See all</p>
            </div>
            <div>
              {locationDocument.map((z, i) => (
                <FourCard key={i} {...z} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="w-[526px] h-[563px] mr-14">
            <p className="p-1 text-graybold">Incident Map</p>
            <img src="/img/location-map.png" alt="" />
            <p className="p-1 text-graybold">
              Start 19.1232, -118.233 End 19.3245, -119.2323
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
