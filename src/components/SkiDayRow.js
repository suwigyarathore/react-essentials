import { MdTerrain } from 'react-icons/md'
import { TiWeatherSnow } from 'react-icons/ti'
import React from 'react'
import PropTypes from 'prop-types'


const SkiDayRow = ({ resort,
  date,
  powder,
  backcountry }) => (
    <tr>
      <td>{`${ date.getMonth() + 1 }/${ date.getDate() } / ${ date.getFullYear() }`}</td>
      <td>
        {resort}
      </td>
      <td>
        {powder && <TiWeatherSnow />}
      </td>
      <td>
        {backcountry && < MdTerrain />}
      </td>
    </tr>
  )

SkiDayRow.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  resort: PropTypes.string.isRequired,
  powder: PropTypes.bool,
  backcountry: PropTypes.bool
}
export default SkiDayRow
