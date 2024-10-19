import React from 'react'
import { NewIndas } from '../Shared/NewIndas'
import { WhichCard } from '../Incidents/WhichCard'
import { NewInciidents } from '../lib/dv'

const Which = () => {
  return (
    <div>
      <div>
        <NewIndas
          welcome="Home - Incidents - New Incident"
          heading="New Incident"
          btntext="Next step"
          backbtn="Back"
        />
      </div>
      <div className='h-[445px] w-[753px] mx-auto '>
        <div className="font-bold text-black text-[24px] mb-3 flex md:justify-start justify-center  py-5">
          <h1>Which of these best describes the incident?</h1>
        </div>
        <div className='grid md:grid-cols-4 grid-col-1 text-center gap-2 justify-center items-center'>
          {NewInciidents.map((p, i) => (
            <WhichCard key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Which