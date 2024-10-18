import React from 'react'
import { Filter } from '../Shared/Filter'

const Location = () => {
  return (
    <section>
      <div>
        <Filter
          welcome="Incidents - DR-4699 March 2023 Severe Storms "
          heading="DR-4699 March 2023 Severe Storms"
                                  btntext="+New Location"
                                  img='/img/tree.png'
        />
      </div>
    </section>
  );
}

export default Location