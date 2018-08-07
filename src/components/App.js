import React, { Component } from 'react';
import SkiDayList from './SkiDayList';
import SkiDayCount from './SkiDayCount';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      allSkiDays: [
        {
          resort: 'Star Valley',
          date: new Date("1/2/2016"),
          powder: true,
          backcountry: false
        },
        {
          resort: 'Venus Valley',
          date: new Date("1/5/2016"),
          powder: false,
          backcountry: true
        },
        {
          resort: 'Jupiter Valley',
          date: new Date("1/7/2016"),
          powder: false,
          backcountry: false
        },
        {
          resort: 'Mars Valley',
          date: new Date("1/8/2016"),
          powder: true,
          backcountry: true
        }
      ]
    }
  }
  countDays (filter) {
    const { allSkiDays } = this.state
    return allSkiDays.filter(day => filter ? day[filter] : day).length
  }
  render () {
    return (
      <div className="app">
        <SkiDayList days={this.state.allSkiDays} />
        <SkiDayCount total={this.countDays()}
          powder={this.countDays('powder')} backcountry={this.countDays('backcountry')} />
      </div>
    );
  }
}

export default App;
