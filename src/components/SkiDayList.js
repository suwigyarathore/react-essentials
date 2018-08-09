import SkiDayRow from './SkiDayRow'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SkiDayList = ({ days, filter }) => {
  const filteredDays = (!filter
    || !filter.match(/powder|backcountry/)) ?
    days :
    days.filter(day => day[filter])

  return <div className="ski-day-list">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Resort</th>
          <th>Powder</th>
          <th>BackCountry</th>
        </tr>
        <tr>
          <td colSpan={4}>
            <Link to="/list-days">All Days</Link>
            <Link to="/list-days/powder">Powder Days</Link>
            <Link to="/list-days/backcountry">Backcountry Days</Link>
          </td>
        </tr>
      </thead>
      <tbody>
        {filteredDays
          .map(((day, i) =>
            <SkiDayRow key={i}
              {...day}
            />
          ))
        }
      </tbody>
    </table>
  </div>
}

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
  },
  filter: PropTypes.string
}

export default SkiDayList
