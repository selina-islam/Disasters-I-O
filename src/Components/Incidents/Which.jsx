import React from 'react'
import { NewIndas } from '../Shared/NewIndas'
import { WhichCard } from '../Incidents/WhichCard'
import { NewInciidents } from '../lib/dv'
import { useNavigate } from 'react-router-dom'

const Which = () => {
  const navigate =useNavigate()
  const funforback = () => {
    navigate("/Incidents/GetStarted");
  }
  const funfornext = () => {
    navigate("/Incidents/GetStarted/WhichSection/LetsGive");
  }
  return (
    <div>
      <div>
        <NewIndas
          welcome="Home - Incidents - New Incident"
          heading="New Incident"
          btntext="Next step"
          back={funforback}
          next={funfornext}
          backbtn="Back"
        />
      </div>
      <div className='h-[445px] w-[753px] mx-auto '>
        <div className="font-bold text-black text-[24px] mb-3 flex md:justify-start justify-center  py-5">
          <h1>Which of these best describes the incident?</h1>
        </div>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-col-1 text-center gap-2 justify-center items-center'>
          {NewInciidents.map((p, i) => (
            <WhichCard key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Which