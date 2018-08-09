import { MdTerrain } from "react-icons/md"
import { TiWeatherSnow } from "react-icons/ti"
import { FaCalendar } from "react-icons/fa"
import PropTypes from 'prop-types'
import React from 'react'

const percentToDecimal = (dec) => {
  return `${ dec * 100 }%`
}

const calcGoalProgress = (goal, total) => {
  return percentToDecimal(total / goal)
}

const SkiDayCount = ({ total, powder, backcountry, goal }) => (
  <div className="ski-day-count">
    <div className="total-days">
      <span>{total}</span>
      <FaCalendar />
      <span>Days</span>
    </div>
    <div className="powder-days">
      <span>{powder}</span>
      <TiWeatherSnow />
      <span>Days</span>
    </div>
    <div className="backcountry-days">
      <span>{backcountry}</span>
      <MdTerrain />
      <span>days</span>
    </div>
    <div>
      <span>{calcGoalProgress(goal, total)}</span>
    </div>
  </div>
);

SkiDayCount.defaultProps = {
  total: 50,
  powder: 50,
  backcountry: 15,
  goal: 100
}

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number
}

export default SkiDayCount;
