import React from 'react'
import { Filter } from '../Shared/Filter'
import { DashboardCard } from '../lib/dv';
import { Card } from '../Dashboard/Card';

export const Incidents = () => {
  return (
    <div>
      <div>
        <Filter
          welcome="Home - Incidents"
          heading="Incidents"
          btntext="+New Incident"
        />

        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 py-5 px-5 gap-3">
          {DashboardCard.map((DashboardCard, i) => (
            <Card key={i} {...DashboardCard} />
          ))}
        </div>
      </div>
    </div>
  );
}
