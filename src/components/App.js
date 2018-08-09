import React, { Component } from 'react'
import SkiDayList from './SkiDayList'
import SkiDayCount from './SkiDayCount'
import AddDayForm from './AddDayForm'
import PropTypes from 'prop-types'
import Menu from './Menu';
import '../stylesheets/ui.scss'
import '../stylesheets/index.scss'

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

    this.addDay = this.addDay.bind(this);
  }

  addDay (newDay) {
    this.setState({
      allSkiDays: [
        ...this.state.allSkiDays,
        newDay
      ]
    })
  }

  countDays (filter) {
    const { allSkiDays } = this.state
    return allSkiDays.filter(day => filter ? day[filter] : day).length
  }

  render () {
    return (
      <div className="app">
        <Menu />
        {(this.props.location.pathname === '/') ?
          <SkiDayCount
            total={this.countDays()}
            powder={this.countDays('powder')}
            backcountry={this.countDays('backcountry')} /> :
          (this.props.location.pathname === '/add-day') ?
            <AddDayForm onNewDay={this.addDay} history={this.props.history} /> :
            <SkiDayList
              days={this.state.allSkiDays}
              filter={this.props.match.params.filter} />
        }
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.object,
  history: PropTypes.object
};

export default App;
