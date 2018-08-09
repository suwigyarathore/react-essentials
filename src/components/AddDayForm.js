import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddDayForm extends Component {

  constructor (props) {
    super(props);

    this.resort = React.createRef();
    this.date = React.createRef();
    this.powder = React.createRef();
    this.backcountry = React.createRef();

    this.submit = this.submit.bind(this);
  }

  submit (e) {
    e.preventDefault();
  }

  render () {
    const { resort, date, powder, backcountry } = this.props;
    return <form onSubmit={this.submit} className="add-day-form">
      <label htmlFor="resort">Resort Name</label>
      <input id="resort"
        type="text"
        required
        defaultValue={resort}
        ref={this.resort}
      />

      <label htmlFor="date">Date</label>
      <input id="date"
        type="date"
        required
        defaultValue={date}
        ref={this.date}
      />

      <div>
        <input id="powder"
          type="checkbox"
          defaultChecked={powder}
          ref={this.powder}
        />
        <label htmlFor="powder">Powder Day</label>
      </div>

      <div>
        <input id="backcountry"
          type="checkbox"
          defaultChecked={backcountry}
          ref={this.backcountry}
        />
        <label htmlFor="backcountry">Back Country Day</label>
      </div>
      <button>Add Day</button>
    </form>

  }
}

AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2017-02-12",
  powder: true,
  backcountry: false
}

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired,
}

export default AddDayForm;
