import React from 'react'
import PropTypes from 'prop-types'

const AddDayForm = ({ resort,
  date,
  powder,
  backcountry,
  onNewDay }) => {

  let _resort;
  let _backcountry;
  let _date;
  let _powder;

  const submit = (e) => {
    e.preventDefault();
    onNewDay({
      resort: _resort.value,
      date: new Date(_date.value),
      powder: _powder.checked,
      backcountry: _backcountry.checked,
    })
    _resort.value = ''
    _date.value = ''
    _powder.checked = false
    _backcountry.checked = false

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
  onNewDay: PropTypes.func.required
}

export default AddDayForm;
