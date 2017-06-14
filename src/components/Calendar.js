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
    // render invisible divs to offset the first day
    for (var i=1; i< this.props.firstDay; i++) {
      dayArray.push(<DayCard key={i} visible={false}/>)
    }
    for (var j=1; j < this.props.days; j++) {
      dayArray.push(<DayCard ee={ee} number={j} key={j+this.props.firstDay} visible={true}/>)
    }
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
