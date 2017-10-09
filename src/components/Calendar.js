import React from 'react';
import EventEmitter from 'wolfy87-eventemitter';

import DayCard from './DayCard';

import '../styles/Calendar.css'

const ee = new EventEmitter();


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.renderDays=this.renderDays.bind(this);
    this.handleOfficeClick=this.handleOfficeClick.bind(this)
  }

  componentDidMount() {
    const offices = document.querySelectorAll(".offices li")
    offices.forEach(office => office.addEventListener('click', this.handleOfficeClick));
  }



  handleOfficeClick(e) {
    ee.emitEvent('officeClick', [e.target.dataset.office])
  }

  renderDays() {
    const dayArray = [];
    const firstDay = this.props.firstDay === 0 ? this.props.firstDay + 6 : this.props.firstDay - 1;
    // const offsetDays = 6 - this.props.firstDay;
    // console.log({offsetDays})
    // render invisible divs to offset the first day
    for (var i=0; i< firstDay; i++) {
      dayArray.push(<DayCard key={i} visible={false}/>)
    }
    for (var j=1; j < this.props.days +1; j++) {
      dayArray.push(<DayCard ee={ee} number={j} key={j+firstDay} visible={true}/>)
    }
    console.log("dayArray", dayArray);
    return dayArray
  }

  render() {
    return (
      <section className="calendar-container">
        <ul className="days">
          <li>MONDAY</li>
          <li>TUESDAY</li>
          <li>WEDNESDAY</li>
          <li>THURSDAY</li>
          <li>FRIDAY</li>
          <li>SATURDAY</li>
          <li>SUNDAY</li>
        </ul>
        <section className="numbered-days">
          {this.renderDays()}
        </section>
      </section>

    )
  }
}
export default Calendar;
