import SkiDayRow from "./SkiDayRow";
import React from 'react';

const SkiDayList = ({ days }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Resort</th>
        <th>Powder</th>
        <th>BackCountry</th>
      </tr>
    </thead>
    <tbody>
      {days
        .map(((day, i) =>
          <SkiDayRow key={i}
            {...day}
          />
        ))
      }
    </tbody>
  </table>
)

SkiDayList.propTypes = {
  days: ({ days }) => {
    if (!Array.isArray(days))
    {
      return new Error('Days should be array')
    } else if (!days.length > 0)
    {
      return new Error('Days should not be empty')
    } else
    {
      return null
    }
  }
}

export default SkiDayList;
