import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class PeriodPicker extends Component {
  state = {
    from: null,
    to: null
  }

  render() {
    const {from, to} = this.state
    const text = (from && to ? from.toLocaleDateString()+' - '+to.toLocaleDateString() : 'Выберите период')
    return(
      <div>
        <DayPicker
          selectedDays = { day => DateUtils.isDayInRange(day, {from, to}) }
          onDayClick = {this.handleDayClick.bind(this)}
        />
        <p>{text}</p>
      </div>
    )
  }

  handleDayClick(e, day) {
    this.setState(DateUtils.addDayToRange(day, this.state));
  }
}

export default PeriodPicker
