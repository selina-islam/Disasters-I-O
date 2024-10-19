import React from 'react'
import { NewIndas } from '../Shared/NewIndas';
import { useNavigate } from 'react-router-dom';

export const LetGive = () => {
   const navigate = useNavigate();
   const funforback = () => {
     navigate("/Incidents/GetStarted/WhichSection");
   };
   const funfornext = () => {
     navigate("/Incidents/GetStarted/WhichSection/LetsGive/WhereSection");
   };
  return (
    <div>
      <NewIndas
        welcome="Home - Incidents - New Incident"
        heading="New Incident"
        btntext="Next step"
        back={funforback}
        next={funfornext}
        backbtn="Back"
      />
      <div className="flex flex-col justify-center items-center gap-6 mt-6">
        <div className=" w-[95%] md:w-1/2 mx-auto ">
          <h1 className="text-[24px] text-black font-bold">
            Let’s give the incident a title?
          </h1>
          <p className="text-[14px] text-graybold">
            Make a title that will easily identify the incidents
          </p>

          <input
            type="text"
            placeholder="Add title here"
            className="bg-whiteLight border border-gray-300 px-6 py-4 rounded-lg w-full focus:outline-none focus:shadow-inner focus:shadow-green-300 transition-all duration-300 text-12"
          />
        </div>

        <div className="w-[95%] md:w-1/2 mx-auto">
          <h1 className="text-[24px] text-black font-bold">
            Describe what happened during the incident?
          </h1>
          <p className="text-[14px] text-graybold">
            Share some information about the incident. The when, where, how.
          </p>
          <textarea
            name=""
            placeholder="Type here"
            id=""
            className="bg-[#F4F4F5] rounded-[6px] h-[127px] w-[100%] "
          ></textarea>
        </div>
      </div>
    </div>
  );
}
