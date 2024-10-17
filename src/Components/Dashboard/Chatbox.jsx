import React from 'react'
import { Button } from '../Common/Button';



export const Chatbox = () => {
  return (
    <div className="bg-whiteLight h-[475px] w-[331px]  text-graybold rounded-[7px] ">
      <div>
        <div className="bg-orange rounded-t-[12px] h-[63px] text-[18px] text-white font-bold ">
          <h2 className="p-4">Chat with Cypher</h2>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <div className="bg-[#3F3F46] rounded-[7px] w-[213px] h-[57px] text-white text-[12px] flex justify-start items-center px-3 m-2 mt-6">
          <p>Lorem ipsum dolar sit general sac mascho werho</p>
        </div>
      </div>

      <div>
        <div className="border border-gray-300 rounded-[7px] w-[213px] h-[57px] text-graybold text-[12px] flex justify-start items-center px-3 m-2 mt-3">
          <p>Lorem ipsum dolar sit general sac mascho werho</p>
        </div>
      </div>

      <div>
        <div className="border border-gray-300 rounded-[7px] w-[213px] h-[57px] text-graybold text-[12px] flex justify-start items-center px-3 m-2 mt-3">
          <p>Lorem ipsum dolar sit general sac mascho werho</p>
        </div>
      </div>

      <div>
        <div className="bg-[#3F3F46] rounded-[7px] w-[213px] h-[57px] text-white text-[12px] flex justify-start items-center px-3 m-2 mt-3">
          <p>Lorem ipsum dolar sit general sac mascho werho</p>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter your questions..."
          className="border border-gray-300 rounded-[6px] w-[301px] h-[42px] text-graybold text-[12px] flex justify-start items-center px-3 m-2 mt-3 bg-gray-200"
        />
      </div>

      <div className="flex justify-between mx-2 m-2 mt-5">
        <div className="flex text-graybold justify-start size-[24px] gap-2">
          <img src="/img/camera.png" alt="" />
          <img src="/img/gallery.png" alt="" />
          <img src="/img/link.png" alt="" />
        </div>
        <div>
          <Button className="rounded-[15.5px] gap-10  h-[30px] w-[80px] mr-4 ">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
