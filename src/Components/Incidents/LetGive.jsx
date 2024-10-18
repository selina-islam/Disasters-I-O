import React from 'react'

export const LetGive = () => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-3">
        <div>
          <h1 className="text-[24px] text-black font-bold ">
            Let’s give the incident a title?
          </h1>
          <p className="text-[14px] text-graybold">
            Make a title that will easily identify the incidents
          </p>
        </div>

        <div className="w-[752px] h-[50px] rounded-[6px] text-graybold flex items-center bg-[#F4F4F5] mt-2">
          <p>Add title here</p>
        </div>

        <div>
          <h1 className="text-[24px] text-black font-bold">
            Describe what happened during the incident?
          </h1>
          <p className="text-[14px] text-graybold">
            Share some information about the incident. The when, where, how.
          </p>
        </div>
        <textarea
          name=""
          placeholder="Type here"
          id=""
          className="bg-[#F4F4F5] rounded-[6px] h-[127px] w-[752px]"
        ></textarea>
      </div>
    </div>
  );
}
