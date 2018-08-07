
import React, { Component } from 'react';
import '../stylesheets/ui.scss';

class SkiDayCount extends Component {
  render () {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <span>Days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
          <span>Days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
          <span>days</span>
        </div>
        <div>
          <span>{this.props.goal}</span>
        </div>
      </div>
    );
  }
}

export default SkiDayCount;
