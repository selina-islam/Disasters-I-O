import React, { useState } from "react";
import { Filter } from "../Shared/Filter";
import { DashboardCard, NewInciidents } from "../lib/dv";
import { Card } from "./Card";
import { VscClose } from "react-icons/vsc";
import { Chatbox } from "./Chatbox";
import Which from "../Incidents/Which";



const Dashboard = () => {
  const [chatopen, setChatopen] = useState(false);
  const handleChat = () => {
    setChatopen(!chatopen);
  };
  return (
    <>
      <section className="flex flex-col font-oneset ">
        <Filter
          welcome="Welcome Back"
          heading="Dashboard"
          btntext="Cypher AI"
        />

        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 py-5 px-5 gap-3">
          {DashboardCard.map((DashboardCard, i) => (
            <Card key={i} {...DashboardCard} />
          ))}
        </div>
      </section>

      <button
        className="bg-orange text-white font-bebasNeue md:size-[77px] md:text-[55px] text-[35px]  rounded-full i flex justify-center items-center hover:cursor-pointer fixed z-[9999] right-0 bottom-0 size:[50px]"
        onClick={handleChat}
      >
        {chatopen ? <VscClose /> : "C"}
      </button>
      <div className="fixed top-[20px] right-5">
        {chatopen ? <Chatbox /> : null}
      </div>
    <Which/>
    </>
  );
};

export default Dashboard;
