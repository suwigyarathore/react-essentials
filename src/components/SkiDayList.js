import SkiDayRow from "./SkiDayRow";
import React from 'react';
import PropTypes from 'prop-types';

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
  days: PropTypes.object
}

export default SkiDayList;
