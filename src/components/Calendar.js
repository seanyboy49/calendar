import React from 'react';
import DayCard from './DayCard';

import '../styles/Calendar.css'

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.renderDays=this.renderDays.bind(this);
  }

  renderDays() {
    const dayArray = [];
    // render invisible divs to offset the first day
    for (var i=1; i< this.props.firstDay; i++) {
      dayArray.push(<DayCard key={i} visible={false}/>)
    }
    for (var i=1; i < this.props.days; i++) {
      dayArray.push(<DayCard number={i} key={i+this.props.firstDay} visible={true}/>)
    }
    console.log(dayArray)
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
