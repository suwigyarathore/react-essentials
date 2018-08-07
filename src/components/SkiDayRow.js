import { MdTerrain } from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";
import React from 'react';
import PropTypes from 'prop-types';


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
  date: PropTypes.date,
  resort: PropTypes.string,
  powder: PropTypes.number,
  backcountry: PropTypes.number
}
export default SkiDayRow;
