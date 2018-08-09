import React from 'react'
import PropTypes from 'prop-types'

const AddDayForm = ({ resort,
  date,
  powder,
  backcountry }) => {

  let _resort;
  let _backcountry;
  let _date;
  let _powder;

  const submit = (e) => {
    debugger;
    e.preventDefault();
  }

  return (<form onSubmit={submit} className="add-day-form">
    <label htmlFor="resort">Resort Name</label>
    <input id="resort"
      type="text"
      required
      defaultValue={resort}
      ref={input => _resort = input}
    />

    <label htmlFor="date">Date</label>
    <input id="date"
      type="date"
      required
      defaultValue={date}
      ref={input => _date = input}
    />

    <div>
      <input id="powder"
        type="checkbox"
        defaultChecked={powder}
        ref={input => _powder = input}
      />
      <label htmlFor="powder">Powder Day</label>
    </div>

    <div>
      <input id="backcountry"
        type="checkbox"
        defaultChecked={backcountry}
        ref={input => _backcountry = input}
      />
      <label htmlFor="backcountry">Back Country Day</label>
    </div>
    <button>Add Day</button>
  </form>)

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
