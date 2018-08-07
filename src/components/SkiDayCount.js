
import React, { Component } from 'react';
import '../stylesheets/ui.scss';

class SkiDayCount extends Component {
  render () {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>5 Days</span>
        </div>
        <div className="powder-days">
          <span>2 Days</span>
        </div>
        <div className="backcountry-days">
          <span>1 hiking days</span>
        </div>
      </div>
    );
  }
}

export default SkiDayCount;
